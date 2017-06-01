#Notes App
This was one of my first major projects created 6 months ago. I recently became reunited with it's code base. I believe it will be great for me and others to review, refactor and learn from old code. 
I will be frequently updating this old project. If you just wish to view and play around with the app, download or clone the repository. 
After you do that, simple find the "index.html" file and open it in the browser. You should be good to go. If you wish to contribute or play with the code, you will have to open the folder in your terminal. 
Once you are in the root of the folder, carefully type in "npm install" (Must have Node.js). I encourage you to be familiar with "Webpack" and "Node.

Before you begin to start editing code, while in the root folder type carefully "webpack -w" or for webpack to serve and watch files type "webpack-dev-server"
Leave any issue reports here. Below is a list of the thought process I had while I was developing this app. Review my notes carefully to help you better understand the idea behind the app.
HAPPY CODING!!



# Model
Data  : {
    Notes: [{
       id: 1, text: " "     
        
    }] //App Level Array
    , editNoteId: 1,
    Input: "string"
    

}

# Behaviors 
Add Note:
Edit/Delete
Note Input

# View
App
    NoteForm
    NoteList    
        Note

// Prevent Default submit action
   Create function that takes the note (input)
   and adds it to the notes: (state)
   
// Create a free firebase account. 
In order to store the data on the server. 
That way information does not refresh once the page 
is changed or refreshed.
- Review ajax.js file
- When app first runs you have to GET,
- If in Add mode run POST
- If in edit mode run PUT
- If a note is being deleted run DELETE
 
//Also refactor the code as best as possible. 

### Running webpack

>webpack

### Running webpack continously

>webpack -w

### Viewing App
- Open index.html

