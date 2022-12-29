import NotesView from "./NotesView.js";

export default class App {
    constructor(root) {
        this.notes = [];
        this.activeNote = null;
        this.view = new NotesView(root, this._handlers());
    }

    _handlers() {
        return {
            onNoteSelect: noteId => {
                console.log("Note selected: " + noteId);
            },
            onNoteAdd: () => {
                console.log("Note Add");
            },
            onNoteEdit: (title, body) => {
                console.log(title, body);
            },
            onNoteDelete: noteId => {
                console.log("Note DELETED: " + noteId);
            },
        };
    }
}
