# Cooking with Katie - An online recipe sharing website

Cooking with Katie is an online recipe website designed to provide users with delicous food receipes to try at home. The cooking with Katie site is
also a platform where users can share their own recipes with the sites community, add ratings and interact in other ways. 

![Deployed site screenshot](/static/img/readme/cwk_responsive_screenshot.png)   

[see the deployed site here](http://cooking-with-katie.herokuapp.com/index) 

[See the github repository for this project here](https://github.com/nickassafkirk/cooking-with-katie)  

* Please note: This site has been created for education purposes only. The businesses and individuals mentioned are ficticious.

---
## Ux Design
---
### Strategy
  #### - Site Owner Goals:

  * The site owner wishes to increase their online awareness and attract new users to their site. 
  * The site owner wishes to increase their social media followers by linking to their social media accounts.
  * The site owner wishes to create an engaged user group by attracting users to create accounts and subscribe to newsletter.
  * The site owner wants to increase the sites traffic and credibility by allowing users to submit their own recipes. 
  * The site owner wants to encourage users to revisit the site by allowing users to rate other recipes. 
  
  #### - Ideal User:

  * The ideal user will be a professional chef or cooking enthusiast.
  * The ideal user will have access to a good quality camera or smartphone.
  * The ideal user will be english speaking.
  * The ideal user will be active on social media and comfortable posting updates, uploading images and
  interacting with other users.
  * The ideal user will be looking to purchase food, bevarage and cooking related products, accessories and services.

  #### - User Stories:
  * As a new user I want to understand the site's intention immediately.
  * As a new user I want to be able to navigate between site pages and sections easily.
  * As a user I want to be be able to view the site on mobile, tablet and desktop devices.
  * As a new user I want to learn about the business owner's background.
  * As a user I expect to be able to view lot's of different recipes.
  * As a user I want to be able to search and filter recipes by specific criteria.
  * As a user I expect recipes to be labelled and categorised by an intuitive taxonomy.
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
  In the initial iteration of this project, the key functionality to be added for this project is as follows:
  1. A striking homepage with relevant image sections to communicate the site's primary purpose.
  1. A homepage section featuring popular recipes to allow quick access to the recipes section.
  1. An about homepage section which improves site credibility.
  1. A contact page to improve credibility and allow user contact.
  1. A contact confirmation page to improve ux by providing feedback that their email has been received.
  1. A Recipes page where all the sites recipes can be viewed.
  1. A individual recipe page which displays the detailed information for each recipe.
  1. A search bar to allow convenient navigation to a desired user search.
  1. A a sign up form to allow new users to sign up and create an account.
  1. A a sign in form to allow existing users to access their account.
  1. The means for a user to add their own recipe to the site.
  1. The means for a user to edit one of their existing recipes.
  1. The means for a user to delete on their existing recipes.
  1. An account section where users can see their account information and recipes.
  1. The functionality for an existing user to edit their contact information.
  1. The functionality for an existing user to change their password.
  1. A subscribe form where users can sign up to the site's newsletter.
  
  
  #### Features/Functionality to be added
  1. cache unsubmitted form data in case form reloads before submission. 
  1. Add Advertising space to site to add commercial opportunity.
  1. Allow upload of multiple images.
  1. Allow drag and drop image upload from users computer.
  1. Refactor code to enable username to be edited.
  1. Add tooltips to improve first time learning and user experience.
  1. Add working contact email functionality, so user emails are directed to an elected email address.
  1. Add a working forgot password link that will allow users to reset their password from a link sent to their email address. 


---
### Structure

  #### Pages
  1. [Homepage](https://cooking-with-katie.herokuapp.com/)
  1. [Recipes Page](https://cooking-with-katie.herokuapp.com/recipes)
  1. [Single_recipe Template](https://cooking-with-katie.herokuapp.com/recipe/Katie%27s%20Quick%20%26%20Easy%20Pad%20Th)
  1. [Add_recipe Page](https://cooking-with-katie.herokuapp.com/add_recipe)
  1. [Edit_recipe Page](https://cooking-with-katie.herokuapp.com/edit_recipe/60beb683ba94a1001968b633)
  1. [Account Page](https://cooking-with-katie.herokuapp.com/admin)
  1. [About Page](/index.html)
  1. [Contact Page](http://cooking-with-katie.herokuapp.com/contact_us)

---
### Skeleton
 
  #### Navigation
  
  Main Navigation:  
  The primary navigation menu for this site is located in the header of the site on all pages. Hover and touch effects are used to
  indicate that navigation links are clickable and bright colors are chosen to ensure navigation links stand out from the surrounding background.
  Links to each important site page are included in the main navigation menu.
  On smaller devices the main navigation menu collapses and is denoted using the standard 'burger stack' toggler icon. 
  The main navigation menu expands to take up the entire screen on smaller devices to provide a profeessional look and feel. 

  Login Section:    
  The login section appears in the top right hand corener of the site header on medium and larger screenwidths. 
  The login area provides quick access to a users account whn logged in or encourages users to sign in or sign up when there is no user signed in. 
  This is intended to encourage users to sign in to unlock additional site content and functionality and provides immediate feedback that the site is
  dynamic and can be interacted with by the user.
  On medium and smaller devices, the login area is contained within the collapsible main navigation menu in order to condense header information and 
  put emphasis on the brand logo.

  Footer Navigation:    
  Links to imortant site pages and sections are mirrored in the site footer. This consistent footer navigation menu is displayed on all site pages to 
  encourage users to explore additional pages once they have scrolled ot the bottom and read all content on the current page. 

  The footer also includes links to the businesses social media accounts to encourage further off-site interactions by users and to imporve credibility.
  As this is a fake business imagined for demonstration purposes, the social media links currently direct to rthe relevant social media home pages. 
  To encourage user retention all links to external sites will open in a new tab/window.

  Images as links:
  Images are used as links to improve navigation primarily on touch devices. This is utilised mainly on recipe thumbnail cards on the homepage, recipes page
  and in the re3cipes section in the account.

  Buttons as Links:  
  Buttons and pseudo buttons are used throughout the site to boldly demonstrate a clickable site element. Clear labels and icons are used to indicate a 
  buttons purpose or intended destination to imporove first time learning and site useability. On the homepage buttons are used to bring users to the add recipe page.
  When a contact form is submitted a return home button is present oj the response page, to redirect users to the site home. 
  When used on forms, buttons are used for submission of information but redirects are also utilised upon form submission to transport
  the user to the page where the result of their input is displayed. This is to provide clear feedback to a user with the result of their input and
  to encourage ongoing interaction from users once one interaction has been completed.

  #### Mockups
  ![Deployed site screenshot](/static/img/readme/cwk_responsive_screenshot.png)

  A responsive view of the site can be seen at [am i responsve](http://ami.responsivedesign.is/?url=http%3A%2F%2Fcooking-with-katie.herokuapp.com%2Findex)

---
### Surface

The goal when implementing the site surface components was to implement a casual but recogniseable style. 
The surface motif focuses on impactful imagery of relevant content to communciate the site's purpose and a neutral color 
palette which utilises muted, earthy tones to put the focus on images and interactive site elements. 

#### Fonts
All fonts utilised for this project were sourced using [Google Fonts](https://fonts.google.com/)    
Three fonts are utilised for this project:  
1. [Dancing Script](https://fonts.google.com/specimen/Dancing+Script?query=dancing+script)
Dancing script is a custive, handwritten styled font that is used for the site heading/logo anf on form and section headings.
The font-weight has been increased to prviode more impact in headings. 

2. [Fjalla One](https://fonts.google.com/specimen/Fjalla+One?query=Fjalla+One#license)
Fjalla one is the primary font used for headings where increased impact and readability is needed on brighter or colored backgrounds. 
This font is used throughout the prpject on form and section headings, buttons and links and is used to copmmunciate the hierarchy of site information.

3. [Montserrat](https://fonts.google.com/specimen/Montserrat)
Montserrat is the main body font style used for paragraphs and larger sections of text. It has a slim appearance which is great for condensing
larger bodies of text on small screen widths while maintaining good readabilty. This very understated sans-serif font was specifically chosen
to provide a professional appearance and establish noticeable contrast between body text, headings and the signature 'dancing script' font to
further communicate the hierarchy of information on the page.

#### Colors

A muted earthy color palette was designated for this project as a metaphor or rference to the site's connection to food, good ingredients and the earth/land. 
Bright colors are used to highlight areas of interest or where a user interaction can occur. Variables were used throughout to allow quick changes to the 
color theme.

##### Text Colors
There are three main font colors used:   
**--txt-light: #efefef;**   
This is an off-white color used on dark and darker colored backgrounds or when text needs to stand out.     
**--txt-dark: #111;**   
This is a very dark grey color used to improve readability on larger bodies of text and to allow suitable contrast on areas with lighter backgrounds.
**--txt-cute: #bd4f4f;**    
This is a rusty brown/red color which is used for branding and as an accent for headings, button back grounds and other areas
                       which denote important information or an area of user interest.

##### Background and Accent Colors:
A handful of accent colors are utilised to generate a consistent color them across the site. 

**--dark-blue: #11141b;**   
This is an almost black color used in the site header and footer and for eaqch recipe cards heading. 
This was chosen as a bold color to give the homepage intense impact.    

**--txt-cute: #bd4f4f;**   
This is primarily used as a text color but is also used throughout as the main button background
color associated with negative user action (cancel, delete etc...). Except where it is used as a positive 
associated action button color where the mint colors are used as a background. 

**--terracota-dark: #74322f;**   
This is a slightly darker version of --txt-cute used for the mobile main nav background. These colors were chosen
as they are reminiscent of cooking spices like paprika, cayenne pepper etc...

**--mint: #B9E2DA; --mint-dark: #89b0a9; --mint-light: #edffff;**    
Three variants of mint hues are used primarily for form, heading and button background colors. Mint colors were chosen
as a nice light accent color on the dark blacks and reds without being harsh. They were also selected as a reference 
to popular cooking herbs like mint, oregano etc... The mint dark color is chosen throughout the site as the priomary button color 
for form buttons with positive conatation (submit, send, enter etc...)

**--red-gradient: linear-gradient(to right, rgba(255, 0,0, 0.5), rgba(125, 0, 0, 0.5));**   
This was used as a subtle way to tie the reds and greens and blacks utilised across the site together
on the add and edit recipe forms. 

#### Icons
Icons have been used throughout this project as metaphors to reinforce heading and button meaning. All icons utilised for this project
were sourced from [fontawesome.com](https://fontawesome.com/)

#### Images
Images have been used throughout the project to provide site context and to be visually appealing. As users can upload their own
images, measures have been taken to try and ensure that images crop correctly if necessary. 

#### Animations
Due to a slight delay when the add recipe form is submitted an animation was added to the submit button where the airplane icon
moves diagonally across it's housing button. This was chosen as a pseudo-spinner, to provide feedback that an action has been
registered and something is happening.

---
## Testing
---
link to testing.md file

### validaton

#### CSS

The site styles were validated using the [w3 css validator](https://jigsaw.w3.org/css-validator/validator):
- No errors were found.
- 235 warnings were logged: 
    - 20 warnings were due to use of variables
    - The remaing warnings were due to the use of vendor prefixes
All of the above warnings can be ignored as the W3C validator does not support variables or vendor prefixes

#### HTML:

All html pages were tested using the [W3 markup validator](https://validator.w3.org/)
All pages passed validation with no errors or warnings. 

- Index.html: No errors, no warnings
- recipes.html: No errors, no warnings
- recipe.html: No errors, no warnings
- add_recipe.html: no errors, no warnings
- edit recipe.html: no errors, no warnings
- contact_us.html: no errors, no warnings
- account.html: no errors, no warnings
- contact_confirmation.html: no errors, no warnings
- error.html: no errors, no warnings
- sign_in.html: no errors, no warnings
- sign_up.html: no errors, no warnings


#### Python:

The code in the main app.py file was checked for pep8 comliance using
[pep8online.com](http://pep8online.com/checkresult)
- One warning was returned for line to long on line 301
        "line too long (111 > 79 characters)"
  Unfortunately this is an image URL name which cannot be split or indented and therefore
  this recommendation must be ignored. This does not impact the functionality of the site.

  The Prettier linting extension was also used and there are no other warnings or linting issues apart
  from the issue described above.

Your code
---
## Code
---
### Technologies used

- HTML  
        Html is used to add content such as text and images to the site as well as to create the raw structure of site elements.
- CSS   
        CSS is used to add color, styling, advanced layout and animations to the html content in order to improve the user experience. 
- Javascript    
        Javascript is used to add interactivity to the site and to control, validate and prevent incorrect user inputs. 
        JS is also used to add dynamic styling to page elements. 
- Python    
        Python is used to handle backend logic, routing and to interact with the chosen database to store, sendm retrieve and update user data. 

Frameworks/Libraries/Packages
- [Bootstrap](https://getbootstrap.com/) - Bootsrap is used to apply responsive styles and layout quickly and easily to enhance the visual appeal and user experience on the site.
- [Flask](https://flask.palletsprojects.com/en/2.0.x/) - Flask is used to handle routing, login/logout and security, and interface with the database to create, read, update and delete data from 
                                                         the databse. 
- [Sortable](https://github.com/SortableJS/Sortable) - Sortable is used to enable drag and drob sorting of the add and edit forms. 

Database & File Storage
- [MongoDB](https://www.mongodb.com/) - Mongo DB was chosen to store user and site data necessary to allow dynamic rendering of site pages.
- [Cloudinary](https://cloudinary.com/home-6-4-video-b) - Cloudinary is used to host user images. Once user images are uploaded to cloudinary,]
their URLs are stored in the Database allowing thm to be easily read and rendered on the site.

### Vendor Prefixes

Vendor prefixes were added to the main stylesheet using [autoprefixer](https://autoprefixer.github.io/) to ensure styles are applied as consistently as possible across different browsers.

---
## Database
---

This data-driven project uses MongoDB to store and manage user and site data. 
There are three main data objects for this project:
1. Users  - This stores user details such as contact details, password, owned recipes etc... It is created upon sign_up
            and some fields can subsequently be updated consciously by users in their account portal or automatically by the user's 
            interactions with the site.
1. Recipes - This stores the key information for each user recipe, including intro, title, images, ingredients etc...
             each recipe DB object is created upon successful completion of the add recipe form. The recipe can subsequently be
             updated using the edit recipe form or deleted using the the delete button.
1. Categories - These are the categories used to sort and order recipes by meal type eg breakfast, dessert etc... 
1. Cuisine - These are the cuisines/genres of food that are used to sort and order recipes by cuisine.
1. Units - These are the accepted unit types for ingredient quantities when adding and editing recipes.
1. Subscribers - This is where clients who have elected to subscribe to the newsletter's information is stored. It is sepparate to
                 the user object so clients can sign up without having an account. 
1. Ingredients - This is where each featured ingredient to be inserted onto the homepage featured ingredient section can be stored.
                 This was created with the intention of creating a dedicated section in the admin account to upload, edit and change the featured
                 ingredient. It includes an ingredient name, image, an array of it's in season months and a boolean value to elect if it is displayed
                 or not. In future development cycles, I wish to dynamically insert featured ingredients to the site based on when they are in season.

                 

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
   favourites: list
   user_recipes: list    

2. #### Recipes:
   recipe_id: varchar auto  
   created_by: varchar (username)
   date_created: datetime
   title: varchar(30)   
   intro: varchar(250)  
   ingredients:list of objects [{"number": int, "name": string, "quantity": int, "unit": string},... ]   
   instructions: list of objects[{"step[n]": instruction},...]   
   category: varchar (10)   
   cuisine: varchar (20)    
   prep_time: int   
   cook_time: int   
   rating: array
   avg_rating: int
   image: string (image url)

3. #### Categories:
   category_id: varchar auto 
   name: varchar(20)

4. #### Cuisine:
   cuisine_id: varchar auto 
   cuisine: varchar(20)
     
5. #### Units
   unit_id: varchar auto
   unit_name: varchar
   unit_symbol: varchar

6. #### Subscribers
   subscriber_id: varchar auto
   email_address: varchar
   has_account: boolean

7. #### Ingredients
   ingredient_id: varchar auto
   name: varchar
   in_season: array/list
   image: string
   featured: boolean
  
---
## Credits
---
### Content Credits

1. [Pancake recipe](https://www.bbcgoodfood.com/recipes/easy-pancakes)
    Content was copied from https://www.bbcgoodfood.com/recipes/easy-pancakes

2. [Cheesecake recipe](https://thehappypear.ie/recipes/easy-5-ingredient-cheesecake/)
    This recipe was copied from [this happy pear recipe](https://thehappypear.ie/recipes/easy-5-ingredient-cheesecake/)

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

10. [Corn Bg Image](https://unsplash.com/photos/Hmcpg4cnSRA)
     Credit Markus Winkler from [Unsplash.com](https://unsplash.com/)

11. [Carrots Header Image](https://unsplash.com/photos/0_90J7szLxI)
     Credit Heather Gill from [Unsplash.com](https://unsplash.com/)

12. [Cheesecake recipe image](https://unsplash.com/photos/TB0Ao4CQRqc)
    Credit Waranya Mooldee from [Unsplash.com](https://unsplash.com/)

13. [Cheese Toastie Recipe](https://unsplash.com/photos/_wA_5FSU4NQ)
    Credit Nathan Dumlao from [Unsplash.com](https://unsplash.com/)

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

7. Bootsrap .collapsing delay issue fix:
   - To prevent an excessive delay when exposing the main nav menu on tablet and mobile devices, I edited bootstrap's default
   animation styles on their .collapsing class. I was made aware of the default collapsing animation in [this github page](https://github.com/twbs/bootstrap/issues/17205). 

   The following code was edited to achieve my desired behaviour: 

    The solition was submitted by user: ajithmal commented on 16 Mar 2018

        .collapsing {
            -webkit-transition: height .5s ease;
            -o-transition: height .5s ease;
            transition: height .5s ease;
        }

8. Prevent form submission on enter:
   - The default behaviour for form is that the form is submitted on enter. This caused a poor user experience as form could submit before user had filled out form completely.
   To fix this issue, I utilised the following code dubmitted by Daniel Trebbien:
        ```<form action="...">
                <!-- Prevent implicit submission of the form -->
                <button type="submit" disabled style="display: none" aria-hidden="true"></button>```
   Which I found at [this stackOverflow post](https://stackoverflow.com/questions/895171/prevent-users-from-submitting-a-form-by-hitting-enter)

9. To carry out basic form validation on various site forms I used the basic techniques described in this 
[www.freecodecamp.org article](https://www.freecodecamp.org/news/basic-form-validation-in-javascript/) and wrote custom
scripts to achieve a very basic validation. 

10. Various aspects of the set up and basic flask operations were inspired by Tim Nelson's Thorin and Co, Flask code along project.
 Tim also suggested the use of the @login_required decorator during a tutor session which has been utilised to improve security for this project.

---
## Deployment
---

This project was deployed using [heroku](https://id.heroku.com/login) and [Github](https://github.com/).
To replicate deployment in this manner first create accounts for both services at the links above.
[Mongo.DB](https://www.mongodb.com/) was chosen to store data for this project. You will also need to create an account.

You also need to install the [Gitpod Extension for Chrome](https://www.gitpod.io/docs/browser-extension/)

1. In Github, go to the [project repositiory](https://github.com/nickassafkirk/cooking-with-katie) Once in the repository click the green gitpod button within the code section to clone the project to your local Gitpod workspace.

2. In our workspace we now want to install Flask. In the command line enter the command python3. Next enter the pip3 Install Flask command.
3. Next create a file called requirements.txt in our root folder. This can be done with touch requirements.txt in the terminal.
4. Now we can create our database by going to Mongo.DB signing up and creating a new cluster. In our new cluster we then want to make a new collection and within that our new databases. 
5. The detailed structure and schema to replicate the database is described above.
6. To connect to our database we then need to follow the connection instructions in mongoDb to connect using mongoDB's native drivers. To do so we will ned to create a number of 
environmental variables. 
7. Create and env.py file in our root folder if you haven't already done so. Next add the env.py file to your .gitignore file.
8. In the env.py file create the following environmental variables using os.setDefault()
        os.environ.setdefault("IP", "Your IP here"), 
        os.environ.setdefault("PORT", "Your port here"), 
        os.environ.setdefault("SECRET_KEY", "Your secret key here"), 
        os.environ.setdefault("MONGO_URI", "Your mongo URI here"), 
        os.environ.setdefault("MONGO_DBNAME", "Your database name from mongDB here").
9. These are now available for use in our main app.py file.
10. Next we can deploy our project ot heroku. First save the necessary requirements in the requirements.txt file using the command pip3 freeze --local > requirements.txt.
This file will outline any dependencies we are using. 
11. Next we create a procfile this will contain 'web: python app.py --local' without quotes.
12. In your heroku account create a new app with a unique name and select your geographically closest region from the dropdown menu. 
13. From the menu select deploy, in hte deployment method click github. Using the search bar find the repository you want to deploy. Select the branch you wish to deploy and connect. 
14. Now we need to add the environmental variables we create in our app to the config cvars section. In Settings click reveal config vars. Enter each environmental variable and then hide 
this section again when you're done. 
15. Now we can commit the changes we've made to our app which should include the requirements file and procfile. 
16. If we go back to the deploy section in heroku we can now enable automatic deployment. This will automatically deploy any changes we make to our project when we push our changes to github.
17. Finally we can select the branch we wish to deploy, in this case the master branch and then click Deploy!.
18. Our project is now deployed. We can visit the application by clicking the open app button in the top right corner. 
19. It may take a few moments to build and deploy the app.

---
## Acknowledgement
---

I'd Like to thank my friends Scott Condron and Paul O'Sullivan for their help and advice on this project.
Both Scott and Paul were extremley generous with their feedback, helped me test the site functionality and
provide their opinions on how to approach a problem when I wanted a second opinion on what way to approach a problem.

I'd also like to thank my Mentor Nishant who was extremly generous with his time and advice and provide brilliant suggestions 
and encouragement as always.
