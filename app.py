import os
import datetime
from functools import wraps
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from bson.objectid import ObjectId
if os.path.exists("env.py"):
    import env
from flask_cors import cross_origin
import cloudinary
import cloudinary.uploader
import cloudinary.api


app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

app.config["ACCEPTED_IMG_EXTENSIONS"] = ["PNG", "JPG", "JPEG", "GIF"]
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

mongo = PyMongo(app)
MONGO_URI = os.environ.get("MONGO_URI")
DATABASE = os.environ.get("MONGO_DBNAME")
USER_UPLOADS = os.environ.get("USER_UPLOADS")
RECIPES = "recipes"


def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if "user" not in session:
            flash("You must log in to view this page")
            return redirect(url_for("sign_in"))
        # user is in session
        return f(*args, **kwargs)
    return decorated_function


@app.route("/")
def load_home():
    return render_template('index.html')


@app.route("/index")
def index():
    recipes = list(mongo.db.recipes.find())
    ingredients = list(mongo.db.ingredients.find())
    return render_template(
        'index.html', recipes=recipes, ingredients=ingredients)


@app.route("/sign_up", methods=["GET", "POST"])
def sign_up():
    if request.method == "POST":

        # check if username already exists in DB
        user_exists = mongo.db.users.find_one(
            {'username': request.form.get('username-sign-up').lower()}
        )
        if user_exists:
            flash("Username taken, sign-in or try another username")
            return redirect(url_for('sign_up'))

        # check if passwords match
        password = request.form.get('sign-up-password')
        confirm_password = request.form.get('confirm-sign-up-password')

        if password == confirm_password:
            valid_password = password

        else:
            flash("Your passwords do not match!")
            return redirect(url_for('sign_up'))

        # create new user object
        new_user = {
            "username": request.form.get('username-sign-up').lower(),
            "password": generate_password_hash(valid_password),
            "first_name": request.form.get('fname-sign-up').lower(),
            "last_name": request.form.get('lname-sign-up').lower(),
            "email_address": request.form.get('email-sign-up'),
            "is_admin": False,
            "favourites": [],
            "user_recipes": []
        }

        # add new_user to DB
        mongo.db.users.insert_one(new_user)

        # add session cookie
        session["user"] = request.form.get('username-sign-up').lower()
        flash("Sign Up Successful!")
        return redirect(url_for('account', username=session["user"]))
    return render_template("sign_up.html")


@app.route("/sign_in", methods=["GET", "POST"])
def sign_in():
    if request.method == "POST":

        # check if username already exists in DB
        existing_user = mongo.db.users.find_one(
            {'username': request.form.get('username-sign-in').lower()})

        if existing_user:
            if check_password_hash(existing_user["password"], request.form.get(
                    "password-sign-in")):
                session["user"] = request.form.get(
                    'username-sign-in').lower()
                flash("Welcome back {}".format(
                    request.form.get('username-sign-in')))
                return redirect(url_for("account", username=session["user"]))
            else:
                flash("password doesn't match")
                return redirect(url_for('sign_in'))
        else:
            flash("Username not found")
            return redirect(url_for('sign_in'))

    return render_template("sign_in.html")


@app.route("/account/<username>", methods=["GET", "POST"])
@login_required
def account(username):
    # grab the session user's username from db
    user = mongo.db.users.find_one(
        {"username": session["user"]})
    # square bracket at end denotes that
    # we only want to return the username from the user
    username = user["username"]

    recipes = list(mongo.db.recipes.find())
    user_recipes = list(mongo.db.recipes.find({"created_by": username}))
    categories = list(mongo.db.categories.find())
    users = list(mongo.db.users.find())

    if session["user"]:
        return render_template(
            "account.html", user=user, users=users, username=username,
            recipes=recipes, user_recipes=user_recipes, categories=categories)

    return redirect(url_for("sign_in"))


@app.route("/logout")
@login_required
def logout():
    # remove user from session cookies
    flash("You have been logged out")
    session.pop("user")
    return redirect(url_for("sign_in"))


@app.route("/update_user/<user_id>", methods=["GET", "POST"])
@login_required
def update_user(user_id):
    user = mongo.db.users.find_one({"_id": ObjectId(user_id)})
    if request.method == "POST":
        update_user = {
            "username": user['username'],
            "password": user['password'],
            "first_name": request.form.get('fname-update').lower(),
            "last_name": request.form.get('lname-update').lower(),
            "email_address": request.form.get('email-update'),
            "is_admin": user['is_admin'],
            "favourites": user['favourites'],
            "user_recipes": user['user_recipes'],
        }
        mongo.db.users.update({"_id": ObjectId(user_id)}, update_user)
        flash("Account Details Updated successfully")
        return redirect(url_for('account', username=user['username']))


@app.route("/change_password", methods=["GET", "POST"])
@login_required
def change_password():
    if request.method == "POST":
        # check if username already exists in DB
        existing_user = mongo.db.users.find_one(
            {'username': session['user']})
        print(existing_user)
        # double check if password match
        existing_password = request.form.get("existing-password")
        confirm_existing_password = request.form.get(
            "confirm-existing-password")

        if existing_password != confirm_existing_password:
            flash("Passwords don't match")
            return redirect(url_for(
                "account", username=existing_user['username']))

        if existing_user:
            if check_password_hash(
                    existing_user["password"], existing_password):
                new_password = request.form.get("new-password")
                confirm_new_password = request.form.get("confirm-new-password")
                if new_password == confirm_new_password:
                    valid_password = new_password
                else:
                    flash("Passwords don't match")
                    return redirect(url_for(
                        "account", username=existing_user['username']))
            else:
                flash("Incorrect Password")
                return redirect(url_for(
                    "account", username=existing_user['username']))
        else:
            flash("Sign in to make changes")
            return redirect(url_for('sign_in'))

        mongo.db.users.find_one_and_update(
            {"username": session["user"]},
            {"$set": {"password": generate_password_hash(valid_password)}})
        flash("Password Updated Successfully")
        return redirect(url_for("account", username=existing_user['username']))


@app.route("/recipes")
def recipes():
    recipes = list(mongo.db.recipes.find())
    return render_template("recipes.html", recipes=recipes)


@app.route("/search_recipes", methods=["GET", "POST"])
def search_recipes():
    search = request.form.get("search_recipe")
    recipes = list(mongo.db.recipes.find({"$text": {"$search": search}}))
    return render_template("recipes.html", recipes=recipes)


@app.route("/recipe/<recipe>")
def recipe(recipe):
    recipe = mongo.db.recipes.find_one({"title": recipe})
    ingredients = list(recipe["ingredients"])
    return render_template(
        "recipe.html", recipe=recipe, ingredients=ingredients)


# credit "Julian nash"
# https://www.youtube.com/watch?v=6WruncSoCdI&list=LL7yGGnZb8BruqiOeC1KZ2Qg
def check_image_extension(filename):

    if "." not in filename:
        return False

    ext = filename.rsplit(".", 1)[1]

    if ext.upper() in app.config["ACCEPTED_IMG_EXTENSIONS"]:
        return True
    else:
        return False


def get_todays_date():
    todays_date = datetime.datetime.now()
    return todays_date.strftime("%d/%m/%y")


@app.route("/add_recipe", methods=["GET", "POST"])
@cross_origin()
@login_required
def add_recipe():
    # initiate cloudnary API
    cloudinary.config(cloud_name=os.environ.get(
        'CLOUD_NAME'), api_key=os.environ.get(
            'API_KEY'), api_secret=os.environ.get('API_SECRET'))
    upload_result = None

    if request.method == "POST":
        file_to_upload = request.files['file']
        if file_to_upload:
            upload_result = cloudinary.uploader.upload(file_to_upload)
            image_url = upload_result["url"]
        else:
            flash("You must include an image")
            return redirect(url_for('add_recipe'))

        # create ingredient object
        instructions = []
        ingredients = []

        for key, val in request.form.items():
            # create ingredients list
            if key.startswith("ingredient"):
                if not val:
                    continue
                number = key.split('-')[-1]
                quantity = request.form.get(f'quantity-{number}')
                unit = request.form.get(f'unit-{number}')
                ingredients.append(
                    {'number': number, 'name': val, 'quantity': quantity,
                        'unit': unit})
            # create instructions list
            if key.startswith("step"):
                if not val:
                    continue
                instructions.append(val)

        # Generate date_created
        date_created = get_todays_date()

        recipe = {
            "created_by": session["user"],
            "date_created": date_created,
            "title": request.form.get("title"),
            "intro": request.form.get("intro"),
            "ingredients": ingredients,
            "instructions": instructions,
            "prep_time": request.form.get("prep-time"),
            "cook_time": request.form.get("cook-time"),
            "rating": [],
            "avg_rating": 0,
            "category": request.form.get("category"),
            "cuisine": request.form.get("cuisine"),
            "image": image_url
        }

        mongo.db.recipes.insert_one(recipe)
        flash("Recipe successfully uploaded")
        return redirect(url_for('recipe', recipe=recipe['title']))

    # cuisine options
    categories = list(mongo.db.categories.find())
    cuisine_options = list(mongo.db.cuisine.find())
    unit_options = list(mongo.db.units.find())

    return render_template(
        "add_recipe.html", cuisine_options=cuisine_options,
        categories=categories, unit_options=unit_options)


@app.route("/edit_recipe/<recipe_id>", methods=["GET", "POST"])
@login_required
def edit_recipe(recipe_id):

    # get static values
    recipe = mongo.db.recipes.find_one({"_id": ObjectId(recipe_id)})
    categories = list(mongo.db.categories.find())
    cuisine_options = list(mongo.db.cuisine.find())
    unit_options = list(mongo.db.units.find())
    created_date = recipe["date_created"]
    rating = recipe["rating"]
    avg_rating = recipe["avg_rating"]

    # initiate cloudnary API
    cloudinary.config(cloud_name=os.environ.get(
        'CLOUD_NAME'), api_key=os.environ.get(
            'API_KEY'), api_secret=os.environ.get('API_SECRET'))
    upload_result = None

    if request.method == "POST":
        file_to_upload = request.files['file']
        if file_to_upload:
            upload_result = cloudinary.uploader.upload(file_to_upload)
            image_url = upload_result["url"]
        else:
            image_url = recipe["image"]

        # create ingredient object
        instructions = []
        ingredients = []

        for key, val in request.form.items():
            # create ingredients list
            if key.startswith("ingredient"):
                if not val:
                    continue
                number = key.split('-')[-1]
                quantity = request.form[f'quantity-{number}']
                unit = request.form[f'unit-{number}']
                ingredients.append(
                    {'number': number, 'name': val,
                        'quantity': quantity, 'unit': unit})
            # create instructions list
            if key.startswith("step"):
                if not val:
                    continue
                instructions.append(val)

        update = {
            "created_by": session["user"],
            "date_created": created_date,
            "title": request.form.get("title"),
            "intro": request.form.get("intro"),
            "ingredients": ingredients,
            "instructions": instructions,
            "prep_time": request.form.get("prep-time"),
            "cook_time": request.form.get("cook-time"),
            "rating": rating,
            "avg_rating": avg_rating,
            "category": request.form.get("category"),
            "cuisine": request.form.get("cuisine"),
            "image": image_url
        }

        mongo.db.recipes.update({"_id": ObjectId(recipe_id)}, update)
        return redirect(url_for('recipe', recipe=update['title']))

    return render_template(
        "edit_recipe.html", recipe=recipe, cuisine_options=cuisine_options,
        unit_options=unit_options, categories=categories)


@app.route("/delete_recipe/<recipe_id>")
@login_required
def delete_recipe(recipe_id):
    mongo.db.recipes.remove({"_id": ObjectId(recipe_id)})
    flash("Recipe was deleted")
    return redirect(url_for("recipes"))


@app.route("/rating/<recipe_id>", methods=["POST"])
def rating(recipe_id):
    if request.method == "POST":
        user_rating = int(request.form.get("submit-button"))

        recipe = mongo.db.recipes.find_one(
            {"_id": ObjectId(recipe_id)})

        recipe_owner = recipe['created_by']

        if recipe_owner == session['user']:
            flash("You can't rate your own recipe!")
            return redirect(url_for("recipes"))

        else:
            mongo.db.recipes.find_one_and_update(
                {"_id": ObjectId(recipe_id)},
                {"$push": {"rating": user_rating}})
            recipe_rating = recipe['rating']
            average = round(sum(recipe_rating)/len(recipe_rating))
            mongo.db.recipes.find_one_and_update(
                {"_id": ObjectId(recipe_id)},
                {"$set": {"avg_rating": average}})
            flash('Thank you for submitting your Rating')
            return redirect(url_for("recipes"))


@app.route('/new_subscriber', methods=["POST"])
def new_subscriber():
    if request.method == "POST":
        new_subscriber = str(request.form.get('new_subscriber'))
        existing_user = mongo.db.users.find_one(
            {"email_address": new_subscriber})
        existing_subscriber = mongo.db.subscribers.find_one(
            {"email_address": new_subscriber})
        has_account = False
        if existing_subscriber:
            flash("You're already signed up")
            return redirect(url_for("index"))
        if existing_user:
            mongo.db.users.update(
                {"username": existing_user["username"]},
                {"$set": {"subscribed": True}})
            has_account = True
        subscriber_details = {
            "email_address": new_subscriber,
            "has_account": has_account
        }

        mongo.db.subscribers.insert_one(subscriber_details)

        flash("Thanks for signing up to our newsletter")
        return redirect(url_for("index"))


@app.route('/add_category', methods=["GET", "POST"])
@login_required
def add_category():
    if request.method == "POST":
        user = mongo.db.users.find_one({"username": session['user']})
        is_admin = user["is_admin"]
        if not is_admin:
            flash('You need permission to access this area')
            return redirect(url_for("index"))
        new_category = {"name": request.form.get('add-category').lower()}
        mongo.db.categories.insert_one(new_category)
        flash("New category added successfully!")
        return redirect(url_for("account", username=session["user"]))


@app.route("/edit_category", methods=["GET", "POST"])
@login_required
def edit_category():
    if request.method == "POST":

        user = mongo.db.users.find_one({"username": session['user']})
        is_admin = user["is_admin"]
        if not is_admin:
            flash('You need permission to access this area')
            return redirect(url_for("index"))

        selected_category = request.form.items()
        for exisiting_value, new_value in selected_category:
            mongo.db.categories.find_one_and_update(
                {"name": exisiting_value}, {"$set": {"name": new_value}})

        flash("Category Edited successfully!")
        return redirect(url_for("account", username=session["user"]))


@app.route("/delete_category", methods=["GET", "POST"])
@login_required
def delete_category():
    if request.method == "POST":

        is_admin = mongo.db.users.find_one(
            {"username": session['user']}, {'is_admin'})
        if not is_admin:
            flash('You do not have permission to delete categories')
            return redirect(url_for("account", username=session["user"]))

        selected_category = request.form.items()
        for exisiting_value, new_value in selected_category:
            print(exisiting_value)
            mongo.db.categories.remove(
                {"name": exisiting_value})

        flash("Category Deleted Successfully!")
        return redirect(url_for("account", username=session["user"]))


@app.route("/contact_us", methods=["GET", "POST"])
def contact_us():
    if request.method == "POST":
        contact_details = {
            "first_name": request.form.get('contact-fname'),
            "last_name": request.form.get('contact-lname'),
            "email": request.form.get('contact-email'),
            "phone": request.form.get('contact-phone'),
            "message": request.form.get('contact-message')
        }

        if contact_details:
            session['message'] = contact_details
            return redirect(url_for('contact_confirmation', message_details=session['message']))

    return render_template('contact_us.html')


@app.route('/contact_confirmation')
def contact_confirmation():
    return render_template('contact_confirmation.html')


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=(os.environ.get("PORT")),
            debug=True)  # change debug to false before deploying
