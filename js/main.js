// import NotesAPI from "./NotesAPI.js"

// NotesAPI.saveNote({
//     title: "New Note!",
//     body: "I am a new note."
// });

// console.log(NotesAPI.getAllNotes());

import NotesView from "./NotesView.js"
import NotesAPI from "./NotesAPI.js"

const app = document.getElementById("app");
const view = new NotesView(app, {
    onNoteAdd() {
        console.log("Let's add a note!");
    },
    onNoteSelect(id) {
        console.log("Note Selected:" + id);
    },
    onNoteDelete(id) {
        console.log("Note DELETED:" + id);
    },
    onNoteEdit(newTitle, newBody) {
        console.log(newTitle);
        console.log(newBody);
    },
});

view.updateNoteList(NotesAPI.getAllNotes());
