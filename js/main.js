// import NotesAPI from "./NotesAPI.js"

// NotesAPI.saveNote({
//     title: "New Note!",
//     body: "I am a new note."
// });

// console.log(NotesAPI.getAllNotes());

import NotesView from "./NotesView.js"

const app = document.getElementById("app");
const view = new NotesView(app, {
    onNoteAdd() {
        console.log("Let's add a note!");
    }
});
