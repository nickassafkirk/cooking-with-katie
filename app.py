import os

from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)

from flask_pymongo import PyMongo

from werkzeug.utils import secure_filename

if os.path.exists("env.py"):
    import env


app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)

MONGO_URI = os.environ.get("MONGO_URI")
DATABASE = os.environ.get("MONGO_DBNAME")
RECIPES = "recipes"


@app.route("/")
def load_home():
    return render_template('index.html')


@app.route("/recipes")
def recipes():
    recipes = list(mongo.db.recipes.find())
    return render_template("recipes.html", recipes=recipes)


# credit "Julian nash" from https://www.youtube.com/watch?v=6WruncSoCdI&list=LL7yGGnZb8BruqiOeC1KZ2Qg

app.config["IMAGE_UPLOADS"] = "/workspace/cooking-with-katie/static/img/uploads"
app.config["ACCEPTED_IMG_EXTENSIONS"] = ["PNG", "JPG", "JPEG", "GIF"]
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024


def check_image_extension(filename):

    if not "." in filename:
        return False
    
    ext = filename.rsplit(".", 1)[1]

    if ext.upper() in app.config["ACCEPTED_IMG_EXTENSIONS"]:
        return True
    else:
        return False


@app.route("/add_recipe", methods=["GET", "POST"])
def add_recipe():

    if request.method == "POST":

        if request.files:
            
            image = request.files["select-image"]

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

            return redirect(request.url)

    return render_template("add_recipe.html")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=(os.environ.get("PORT")),
            debug=True)  # change debug to false before deploying