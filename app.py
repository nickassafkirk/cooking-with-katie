import os

import datetime

from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for, send_from_directory)

from flask_pymongo import PyMongo

from werkzeug.security import generate_password_hash, check_password_hash

from werkzeug.utils import secure_filename

from bson.objectid import ObjectId

if os.path.exists("env.py"):
    import env


app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)

MONGO_URI = os.environ.get("MONGO_URI")
DATABASE = os.environ.get("MONGO_DBNAME")
USER_UPLOADS = os.environ.get("USER_UPLOADS")
RECIPES = "recipes"


@app.route("/")
def load_home():
    return render_template('index.html')


@app.route("/index")
def index():
    return render_template('index.html')


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
        password = request.form.get('password-sign-up')
        confirm_password = request.form.get('conf-password-sign-up')

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
        print(existing_user)
        if existing_user:
            if check_password_hash(existing_user["password"], request.form.get("password-sign-in")):
                session["user"] = request.form.get('username-sign-in').lower()
                flash("Welcome back {}".format(request.form.get('username-sign-in')))
                return redirect(url_for("account", username=session["user"]))
            else:
                flash("password doesn't match")
                return redirect(url_for('sign_in'))
        else:
            flash("Username not found")
            return redirect(url_for('sign_in'))

    return render_template("sign_in.html")


@app.route("/account/<username>", methods=["GET", "POST"])
def account(username):
    # grab the session user's username from db
    username = mongo.db.users.find_one(
        {"username": session["user"]})["username"]
    # square bracket at end denotes that
    # we only want to return the username from the user

    user_recipes = list(mongo.db.recipes.find())

    if session["user"]:
        return render_template("account.html", username=username, user_recipes=user_recipes)

    return redirect(url_for("sign_in"))


@app.route("/logout")
def logout():
    # remove user from session cookies
    flash("You have been logged out")
    session.pop("user")
    return redirect(url_for("sign_in"))


@app.route("/recipes")
def recipes():
    recipes = list(mongo.db.recipes.find())
    return render_template("recipes.html", recipes=recipes)


@app.route("/recipe/<recipe>")
def recipe(recipe):
    recipe = mongo.db.recipes.find_one({"title": recipe})
    print(recipe)
    return render_template("recipe.html", recipe=recipe)


# credit "Julian nash"
# https://www.youtube.com/watch?v=6WruncSoCdI&list=LL7yGGnZb8BruqiOeC1KZ2Qg

app.config["IMAGE_UPLOADS"] = "/workspace/cooking-with-katie/static/img/uploads"
app.config["ACCEPTED_IMG_EXTENSIONS"] = ["PNG", "JPG", "JPEG", "GIF"]
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024


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
def add_recipe():

    if request.method == "POST":

        # image upload below
        image = None
        filename = None

        if request.files:

            image = request.files["select-image"]
            print(image)

            if image.filename == "":
                print("Image must have a filename")
                return redirect(request.url)

            if not check_image_extension(image.filename):
                print("That image extension is not allowed")
                return redirect(request.url)

            else:
                filename = secure_filename(image.filename)

                image.save(os.path.join(app.config["IMAGE_UPLOADS"], filename))
            print("Image saved")

        # create ingredient object
        ingredients_list = []
        instructions_list = []
        ingredient_name, ingredient_quantity = None, None
        single_ingredient = {}

        form_items = request.form.items()
        for key, val in form_items:
            if key.startswith("ingredient"):
                ingredient_name = val
            if key.startswith("quantity"):
                ingredient_quantity = val
            if ingredient_name and ingredient_quantity:
                single_ingredient = {
                    ingredient_name.lower(): ingredient_quantity.lower()}
                ingredients_list.append(single_ingredient)
            if key.startswith("step"):
                if val != "":
                    instructions_list.append(val)

        # Generate date_created
        date_created = get_todays_date()

        recipe = {
            "created_by": session["user"],
            "date_created": date_created,
            "title": request.form.get("title"),
            "intro": request.form.get("intro"),
            "ingredients": ingredients_list,
            "instructions": instructions_list,
            "prep_time": request.form.get("prep-time"),
            "cook_time": request.form.get("cook-time"),
            "rating": "no rating",
            "category": request.form.get("category"),
            "cuisine": request.form.get("cuisine"),
            "image": f"https://cooking-with-katie.herokuapp.com/static/img/uploads/{filename}"
        }

        print(recipe)
        mongo.db.recipes.insert_one(recipe)
        flash("Recipe successfully uploaded")
    # cuisine options
    categories = list(mongo.db.categories.find()) 
    cuisine_options = list(mongo.db.cuisine.find())
    print(cuisine_options)

    return render_template("add_recipe.html", cuisine_options=cuisine_options, categories=categories)


@app.route("/edit_recipe/<recipe_id>", methods=["GET", "POST"])
def edit_recipe(recipe_id):
    if request.method == "POST":
        # image upload below
        image = None
        filename = None

        if request.files:

            image = request.files["select-image"]
            print(image)

            if image.filename == "":
                print("Image must have a filename")
                return redirect(request.url)

            if not check_image_extension(image.filename):
                print("That image extension is not allowed")
                return redirect(request.url)

            else:
                filename = secure_filename(image.filename)

                image.save(os.path.join(app.config["IMAGE_UPLOADS"], filename))
            print("Image saved")

        # get static values
        recipe = mongo.db.recipes.find_one({"_id": ObjectId(recipe_id)})
        categories = list(mongo.db.categories.find())  
        cuisine_options = list(mongo.db.cuisine.find())
        created_date = recipe.date_created
        rating = recipe.rating

        # create ingredient object
        ingredients_list = []
        instructions_list = []
        ingredient_name, ingredient_quantity = None, None
        single_ingredient = {}
        single_instruction = {}

        form_items = request.form.items()
        for key, val in form_items:
            if key.startswith("ingredient"):
                ingredient_name = val
            if key.startswith("quantity"):
                ingredient_quantity = val
            if ingredient_name and ingredient_quantity:
                single_ingredient = {
                    ingredient_name.lower(): ingredient_quantity.lower()}
                ingredients_list.append(single_ingredient)
            if key.startswith("step"):
                if key and val != "":
                    single_instruction = {key: val}
                    instructions_list.append(single_instruction)

        update = {
            "created_by": session["user"],
            "date_created": created_date,
            "title": request.form.get("title"),
            "intro": request.form.get("intro"),
            "ingredients": ingredients_list,
            "instructions": instructions_list,
            "prep_time": request.form.get("prep-time"),
            "cook_time": request.form.get("cook-time"),
            "rating": rating,
            "category": request.form.get("category"),
            "cuisine": request.form.get("cuisine"),
            "image": f"https://cooking-with-katie.herokuapp.com/static/img/uploads/{filename}"
        }

        mongo.db.recipes.update({"_id": ObjectId(recipe_id)}, update) 

    return render_template("edit_recipe.html", recipe=recipe, cuisine_options=cuisine_options, categories=categories)


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=(os.environ.get("PORT")),
            debug=True)  # change debug to false before deploying
