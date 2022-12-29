import App from "./App.js";

const root = document.getElementById("app");
const app = new App(root);

/////////////////////////////////////////////
// Test Code 1
/////////////////////////////////////////////

// import NotesAPI from "./NotesAPI.js"

// NotesAPI.saveNote({
//     title: "New Note!",
//     body: "I am a new note."
// });

// console.log(NotesAPI.getAllNotes());


/////////////////////////////////////////////
// Test Code 2 
/////////////////////////////////////////////

// import NotesView from "./NotesView.js"
// import NotesAPI from "./NotesAPI.js"

// const app = document.getElementById("app");
// const view = new NotesView(app, {
//     onNoteAdd() {
//         console.log("Let's add a note!");
//     },
//     onNoteSelect(id) {
//         console.log("Note Selected:" + id);
//     },
//     onNoteDelete(id) {
//         console.log("Note DELETED:" + id);
//     },
//     onNoteEdit(newTitle, newBody) {
//         console.log(newTitle);
//         console.log(newBody);
//     },
// });

// const notes = NotesAPI.getAllNotes();

// view.updateNoteList(notes);
// view.updateActiveNote(notes[0]);
