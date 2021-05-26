import os
import pymongo
from flask import Flask

if os.path.exists("env.py"):
    import env


MONGO_URI = os.environ.get("MONGO_URI")
DATABASE = "katieDB"
RECIPES = "recipes"


def mongo_connect(url):
    try:
        conn = pymongo.MongoClient(url)
        print("MongoDB is connected")
        return conn
    except pymongo.errors.ConnectionFailure as e:
        print("Could not connect to MongoDB: %s") % e


conn = mongo_connect(MONGO_URI)

coll = conn[DATABASE][RECIPES]

all_recipes = coll.find()

for recipe in all_recipes:
    print(recipe)