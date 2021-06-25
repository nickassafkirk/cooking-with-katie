[Link to README.md](README.md)

Link to deployed site](http://cooking-with-katie.herokuapp.com/index)


## Compatibility

Compatibility testing involved going through the site thoroughly to ensure that the format, layout, styles and functionality of the site perform as intended. 

Testing involved: 


1. Testing the site using multiple browsers to ensure cross-browser compatibility.
   The following browsers were tested for the current deployed version of this site:

   | Browser       | Compatible |
   | --------------|------------|
   | Chrome        |   &#9745;  |
   | Safari        |   &#9745;  |
   | Firefox       |   &#9745;  |
   | Opera         |   &#9745;  |
   | Microsoft Edge|   &#9745;  |

   Unfortunately it was not possible to test the site functionality on internet explorer as no version was available for IOS. 

1. Testing the site across a range of devices to ensure a responsive site that provides a great user experience on all devices.
   The site was tested on: 

   | IOS           |           
   |Iphone 6s Plus |             
   |Iphone SE      |  
   |Iphone XS      |
   |Ipad Mini      |
   
1. Testing the site using chrome dev tools to confirm desired functionality across all breakpoints and screen-widths. 

1. Additional testing was carried out by asking friends and family to test the site and to provide feedback on a range of devices. 

1. while I didn't personally test the site on android or windows devices due to lack of access to these devices, I had several friends test the site on windows and android mobiles.
All of whom reported that the site was working as intended.

## User Story Testing

  1. As a new user I want to understand the site's intention immediately.

        To test this user story I visited the site, the first thing I see is the title/brand which references cooking in large bold 
        lettering. I also notice that the background-image is of some food which again suggests that the site is food related. I then see a collection of 
        food related images of people preparing food and other related content. Scanning quickly The overlaying text on each image references 'recipes', 
        'sharing' and 'tutorials' this suggests that the site contains recipes and food related content. Scrolling down I can see more food and ingredient related 
        imagery and text. From this testing I am satisfied that the site satisfies the user story.

  2. As a new user I want to be able to navigate between site pages and sections easily.  

        To test I click each link on the main navigation menu. Each link has a clear descriptive label. When I click each link I am redirected to a different page.
        At the top of each page upon arrival there is a large heading which matches the label of the link I have just clicked for example when I click recipes I see a label that says 'search recipes',
        when I click the contact us page I am taken to a form which has a large heading that says contact us. From this exerience I am satisfied that the main navigation menu makes it easy to move between site pages.
        Scrolling down the page I can see there are some featured recipes, clicking each image reveal a text change which encourages me as a user to understand that this image is clickable. Upon clicking 
        I am brought to a page with the same title as the image I have just clicked. This is the behaviour I predict. 
        Scrolling down I can see there is a button to add a recipe. Clicking this button directs me to a sign-in page which says login to access this page. However as I do not have an account this is not the behaviour I expected. 
        I would expect to be brought to a sign-up page. 
        Returning to the homepage at the bottom of the page there are replicated links that are found in the main navigation menu. Once I reach the bootom of the page, this makes it convenient to move to a different area. 
        Clicking the recipe page, I can now see many recipes. Clicking the image or title brings me to a new recipe page, this is the behaviour I would expect. By recreating the same tests on each page, I am satisfied that it is easy
        to navigate between site pages. 

        ##### amendments as a result of testing:
        From this testing, links to the Sign-up form from below the Sign-in form and vice versa we're added to improve the user experience and and ease navigation to the relevant page for new and existing users alike.

  * As a user I want to be be able to view the site on mobile, tablet and desktop devices.      
  
  To test this I viewed each site page on mobile landscape, portrait and in responsive mode in chrome dev tools. I observed each page to ensure content
  was not overflowing and that all elements were accessible and visible at each screen width. From this experience I am satisfied that the site displays responsive design and is
  accessible on all screen sizes >320px width. 

##### amendments as a result of testing:
  From this testing, the layout of the ingredient page was changed to allow more space for cooking instructions to improve readability and communciation of the hierarchy of information.


  * As a new user I want to learn about the business owner's background.
To test this I visited the hompepage and scrolled down. Upon scrolling down there is an apparent about section with a large image and a paragraph describing the site owner, '
site purpose and some personal information to build rapport. Having tested this section on all device sizes I am satisfied that the about us section is easily readable, descriptive
and viewable on all common screensizes. As such I am confident that the site fulfils the user story above.

* As a user I expect to be able to view lot's of different recipes.
Upon visiting the site, I can see three featured ingredients towards the top of the page. In the main navigation menu, one of the three links is labelled 
recipes. Upon clicking this link the use is taken to the recipes page. Here they can use the search bar to filter results or scroll down to view all available recipes. 
On different sized screens the page adapts to ensure recipes are clearly viewable and can be accessed easily. Upon clicking each thumnail inmage the user is transport to an individual
recipe page. Here the full recipe details are diosplayed clearly, so as the user can replicate the recipe themselves. The recipes and recipe page are easily navigated on alll screen widths tested. 
At present the site only has a handful of recipes loaded. As the number recipes uploaded to the site increases, pagination on button click scroll to bottom
of page should be added to limit number of recipes displayed on recipes page at any time. Howver at present I am satisfied that the 
recipes section satisfy the user story.


* As a user I want to be able to search and filter recipes by specific criteria.    
On the recipes page there is a clear search bar with an eyecatching background design. The recipe input allows a search term to be typed. If search terms match terms in any of the recipes, then the relevant recipes are returned. 
If no reciped are found then a feedback message is displayed on page refresh. This form works as anticipated and thus can be said to fulfill the user story described above.

* As a user I expect recipes to be labelled and categorised by an intuitive taxonomy.   
As a new user I can see that each recipe has a number of colorful buttonlike tags which display additional information about the recipe. These are present on the recipe preview/thumnail cards on the 
recipes.html page. They are also at the bottom of the page on each individual recipe card. The category is easy to understand, the cuisine is also easily understood. The Cook time is recognisable
as a time related indicator, but it is not totally obvious what the prep time and cook time tags reflect. Ideally a tooltip would be utilised to 
display a full description of each tag, however due to time constraints, this was not possible to implement prior to the project submission date. 
As such I believe that the site partially fulfills the user requirements stated but it is clear improvements could be made in futer development stages.
  
* As a user I expect recipes to be easy to read, understand and reproduce at home.
As a first time user visiting an individual recipe page, I can see that the title, is easily visible at the top of the page. The image displays a prominent
position on the recipe page. The Introduction paragraph is easily readable with plenty of contrast between foreground and background.
The ingredients are formatted nicely in a list. Even on mobile devices there is adequate space between ingredients to allow easy distinction between each ingredient. 
Ingredients with a quantity and unit provide additional clarity when necessary. 
The instructions section is clear to read and is clearlt ordere with numbered labels. This makes it easy to follow the recipe in the correct order. From this testing I am satisfied that recipes are well
laid out and easy to follow thus satisfying the user story above. 

* As a user I want to be able to add my recipes to the site to share with other users.  
Upon logging in a prominent add_recipe tab is present in the main navigation bar. A link to add a recipe is also found in the footer navigation menu.
Upon reaching the add recipe form, a clear title is evident. Large headings clearly demonstrate each form section providing the order at which to fill out the form.
The text inputs have adequate space to enter a value and textareas can be expanded if more space is needed. The instuction and ingredient rows are well ordered. These elements can be dragged by dragging an moving while clicking the 
directions arrows. This provides intuitive feedback as the numbers reorder when a row is deleted or shuffled. Selecting each drop down provides expected behaviour and selecting a file is familiar\
and similar to other sites I use. When a file is selected the filename is displayed providing feedback that a file has been attached.
On submit the airplane icon moves, providing feedback that a event has occurred. Upon successful form submission I am directed to my new recipe where I can see the results of my input. 
This provides satisfactory feedback that a user has used the form correctly.

If a required form field is not submitted the form will not submit, an alert message will tell the user what input is missing or incorrectly entered.
By changing the problematic/Missing field, submission of the form is enabled, redirecting to the created recipe as intended. This testing has satisfied that the add form functionality meets
the user expectation.

* As a return user I want to be able to update and delete my submitted recipes.
When viewing one of my exisitng recipes a prominent edit button is viewable toward the top of the recipe page or in the recipes area of my account. 
Clicking the link redirects to an edit page that is very similar to the original form that was used to upload the recipe. The exisiting values are pre-populated in the
form fields making it convenient to make edits. The drag and reorder sections enables easy reordering of the main recipe sections. The add new rows buttons allow convenient addition of additional ingredients or instructions and the 
delete row buttons makes it simple to delete existing rows. The existing image is previewed, making it easy to decide wether to change it or not.
By replicating the actions carried out when adding a new recipe a user can easiily update an existing recipe. 
The delete button is obvious and easy to operate. It deletes a recipe on click and provides a clear feedback message. It would be expected that a confirmation messaege be displated prior to deletion
but this was not achievable due to running out of time.


 
  * As a new user I want to create an account easily.
  * As a return user I want to be able to log into my account conveniently.
  * As a current user I want to be able to logout easily to secure my account.
  * As an ongoing user I want to be able to save my favourite recipes.
  * As an existing user I want to be able to rate recipes that I've tried myself.

## Manual Testing

## Bugs

#### Anonymous user rating submission error.
- Attribute error when user leaves rating but is not logged in. If no session['user] cookie exist page crashed when an anonymous user tried to leave a rating.
- Fix: To fix this an if clause: ```if 'user' not in session:``` was added to redirect user to sign in page.

#### No instruction or ingredient rows are created.
- If a user deleted all the instruction or ingredient fields on the add and edit recipe form, the page would break if a user then tried to add anopther field.
- Fix: Disabled deletion of last row and generate at least two of each row on page load.

## Remaining bugs to be fixed:

1. The Recipe cards on the recipes page and account recipes section do not scale evenly. While this does not affect the functionality, it is cosmetically 
ugly and will be fixed in future. Unfortunately due to time constraints this issue could not be resolved yet but I plan on using flex grid to achieve the desired functionality
dyring future development of this project.

1. When account page is refreshed after form submission etc... it reloads on the default account details section. This provides a confusing user experience. 
To remedy this I could create new pages with a dedicated rout for each page. Or I could use session cookies to store the last visited page section. Unfortunately due to time onstraints
this could not be resolved before the project was due to be submitted.

1. 
