# Cooking with Katie - An online recipe website

Cooking with Katie is an online recipe website designed to provide users with delicous food receipes to try at home. The cooking with Katie site is
also a platform where users can share their own recipes with the sites community.

![Deployed site screenshot](placeholder_url)
[see the deployed site here]()

---
## Ux Design
---
### Strategy
  #### - Site Owner Goals:

  * The site owner wishes to increase their online awareness and attract new users to their site. 
  * The site owner want's to commercialize the site by exposing users to targetted advertising banners.
  * The site owner wishes to increase revenues by selling advertising space to advertising partners.
  * The site owner wishes to increase their social media followers by linking to their social media accounts.
  * The site owner wishes to create an engaged user group by attracting users to create accounts and subscribe to newsletter.
  * The site owner wants to increase the sites traffic and credibility by allowing users to submit their own recipes. 
  * The site owner wants to encourage users to revisit the site by allowing users to rate other recipes. 
  
  #### - Ideal User:

  * The ideal user will be a professional chef or cooking enthusiast.
  * The ideal user will have access to a good quality camera or smartphone.
  * The ideal user will be english speaking.
  * The ideal user will be active on social media and comfortable posting updates, uploading images and
  interacting with user users.
  * The ideal user will be looking to purchase food, bevarage and cooking related products, accessories and services.


  #### - User Goals:


  #### - User Stories:
  * As a new user I want to understand the site's intention immediately.
  * As a new user I want to be able to navigate between site pages and sections easily.
  * As a user I want to be be able to view the site on mobile, tablet and desktop devices.
  * As a new user I want to learn about the business owner's background.
  * As a user I expect to be able to view lot's of different recipes.
  * As a user I want to be able to search and filter recipes by specific criteria.
  * As a user I expect recipes to be ;abelled and categorised by an intuitive taxonomy.
  * As a user I expect recipes to be easy to read, understand and reproduce at home.
  * As a user I want to be able to add my recipes to the site to share with other users.
  * As a return user I want to be able to update and delete my submitted recipes.
  * As a new user I want to create an account easily.
  * As a return user I want to be able to log into my account conveniently.
  * As a current user I want to be able to logout easily to secure my account.
  * As an ongoing user I want to be able to save my favourite recipes.
  * As an existing user I want to be able to rate recipes that I've tried myself.



---
### Scope
 
  #### Features
  
  #### Features/Functionality to be added

---
### Structure

  #### Pages
  1. [Homepage](/index.html)
  1. [Recipes Page](/index.html)
  1. [Single_recipe Template](/index.html)
  1. [Create_recipe Page](/index.html)
  1. [Account Page](/index.html)
  1. [About Page](/index.html)
  1. [Contact Page](/index.html)

---
### Skeleton
 
  #### Navigation

  #### Wireframes

  #### Mockups

---
### Surface

---
## Testing
---
link to testing.md file

### validaton

---
## Code
---
### Technologies used

### Vendor Prefixes

Vendor prefixes were added to the main stylesheet using autoprefixer to ensure styles are applied as consistently as possible across different browse

---
## Database
---

This data-driven project uses MongoDB to store and manage user and site data. 
There are three main data objects for this project:
1. Users
1. Recipes
1. Categories

### Schema
---

1. #### Users:
   user_id: varchar auto    
   username: varchar (25)   
   password: varchar (50)
   first_name: varchar (50) 
   last_name: varchar (50)  
   user_favourites: list    
   user_recipes: list   
   is_admin: boolean    

2. #### Recipes:
   recipe_id: varchar auto  
   created_by: varchar (username)
   title: varchar(30)   
   intro: varchar(250)  
   ingredients:list of objects [{"ingredient": value, "quantity": value},... ]   
   instructions: list of objects[{"step[n]": instruction},...]   
   meal_type: varchar (10)   
   cuisine: varchar (20)    
   prep_time: int   
   cook_time: int   
   rating: int

3. #### Categories:
   category: id 
   cuisine: varchar(20)  
   meal_type: varchar(20)    

  
---
## Credits
---
### Content Credits

1. [Pancake recipe](https://www.bbcgoodfood.com/recipes/easy-pancakes)
Content was copied from https://www.bbcgoodfood.com/recipes/easy-pancakes

### Image/Media Credits

1. [Pancake image](https://unsplash.com/photos/TkzdkVn1AyA)
   Credit Mae Mu from [Unsplash.com](https://unsplash.com/)

2. [Knife Image Header Banner](https://unsplash.com/photos/m1meZgcUYEk)
   Credit Kevin Doran from [Unsplash.com](https://unsplash.com/)

3. [Hero Image Main](https://www.pexels.com/photo/happy-woman-with-rolling-pin-cooking-at-home-3769999/)
   Credit Andrea Piacquadio from [Pexels.com](https://www.pexels.com/)

4. [Banana Bread Hero Sub Image](https://unsplash.com/photos/iNqQyOw8mx0)
   Credit Chelsea shapouri from [Unsplash.com](https://unsplash.com/)

5. [Asparagus Photo](https://unsplash.com/photos/ReXxkS1m1H0)
   Credit Stephanie Struder from [Unsplash.com](https://unsplash.com/)

6. [Pasta Making Image](https://unsplash.com/photos/4nXkhLCrkLo)
   Credit Jorge Zapata from [Unsplash.com](https://unsplash.com/)

7. [Potato Cakes](https://unsplash.com/photos/qbjkVIixPCY)
   Credit MadMax Chef from [Unsplash.com](https://unsplash.com/)

8. [Omelette Image](https://unsplash.com/photos/N0u8bLrB_-g)
   Credit Igor Miske from [Unsplash.com](https://unsplash.com/)

9. [About US headshot Image](https://www.pexels.com/photo/delighted-ethnic-woman-cooking-in-kitchen-3771120/)
   Credit Andrea Piacquadio from [Pexels.com](https://www.pexels.com/)

### Code Credits

1. Simple Image Upload Functionality:    
   - To enable the functionality to allow users to upload an image to their recipes, I followed a tutorial from on Julian Nash in 
   [this youtube video](https://www.youtube.com/watch?v=6WruncSoCdI&list=LL7yGGnZb8BruqiOeC1KZ2Qg)

2. Access Dict keys by converting to list:
   - To access a dictionary's key's and value's when the keys and values are unknown I used a method outlined in 
   [this stack overflow post](https://stackoverflow.com/questions/18552001/accessing-dict-keys-element-by-index-in-python3)
   to convert the dictionary into a list so that it can be iterated through. 

3. Cloudinary Api Tutorial
   - To enable users to upload images for their recipes, cloudinary was used as a hosting service. To connect the application to cloudinary, 
   [this documentation was followed](https://cloudinary.com/blog/creating_an_api_with_python_flask_to_upload_files_to_cloudinary)

4. @login_required
   - To add additional site security and to prevent user error and malicous behavior the @login_rquired decorator was used throughout this project.
   This code was taken from code institute tutor [Tim Nelson's github](https://github.com/TravelTimN/flask-task-manager-project/commit/6e9fbdd74efc27e781fb5969a7b374b6c6778b41).  
   Additional information was found in [Flask's documentation](https://flask.palletsprojects.com/en/2.0.x/patterns/viewdecorators/#login-required-decorator)        
            def login_required(f):  
            @wraps(f)   
            def decorated_function(*args, **kwargs):            
                if g.user is None:            
                    return redirect(url_for('login', next=request.url))             
                return f(*args, **kwargs)           
            return decorated_function 

5. Input[type=file] custom styling
   - To apply custom styling to the image upload input on the add_recipe and edit_recipe pages. I customised some code described
   at [this link](https://www.toptal.com/twitter-bootstrap/the-10-most-common-bootstrap-mistakes)       
   
   The orginal code is as follows: 
   
            .btn-file {
                position: relative;
                overflow: hidden;
            }

            .btn-file input[type=file] {
                position: absolute;
                top: 0;
                right: 0;
                min-width: 100%;
                min-height: 100%;
                font-size: 100px;
                text-align: right;
                filter: alpha(opacity=0);
                opacity: 0;
                outline: none;
                background: white;
                cursor: inherit;
                display: block;
            }

6. Alternative method to center absolute children on relative parents
   - To center the dummy image upload input in it's parent container I used the technique of using negative margins of half the element's height/width described at 
   [this thoughtbot.com article](https://thoughtbot.com/blog/positioning)

   The orginal code is as follows:   

        .container {
            position: relative;
        }   

        .centered-element {
            height: 100px;
            width: 100px;
            position: absolute;
            left: 50%;
            margin-left: -50px;
            top: 50%;
            margin-top: -50px;
        }

---
## Deployment
---

---
## Acknowledgement
---