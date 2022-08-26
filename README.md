##BACKEND WITH NODE JS
#MVC Architecture
MVC Architecture where M refers to Model(Database), V refer to View(Frontend) and C(API management) refers to Controllers.  

Let's understand it from an analogy, we come to a hotel the looks of hotel is the View part of MVC, (Cusomers).

Users come to our hotel place orders (REQUESTS) to their butlers(Controllers) butlers goes to the chefs with customers requests and the chefs prepare an appropriate food(response) according to it. 

Once the food is prepared it is taken back to the customer by butler.

MODELS:
    To make the food though we will require materials so they are fetched from the store-room/fridge/whatever(database) in store-room food is kept in some order(collection) for example vegetables, fruites, spices, etc. 
    
    (Collection include the basic structure of elements stored, ex: 
    a Vegitable collection can have structure of color, name, taste, cooking methods, etc. )

    Those collection of things will follow some structure to give those items their own identity. 

    Models are simply structuring of collections.  

    CONTROLLERS: 
    are callback functions inside which we make validation checking and then provide input or fetch output from the model. Basically controllers helps us to perfrom CRUD operations on our Model. 

    Controllers also links us to other views or changes that are to made on views.  

    So from the above statements we can infer that controllers recive requestes and acting on those it gives response. 