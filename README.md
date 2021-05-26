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

### Image/Media Credits

### Code Credits

---
## Deployment
---

---
## Acknowledgement
---