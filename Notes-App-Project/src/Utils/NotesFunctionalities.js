export const deleteNote = (idxToDelete, setNotes) => {

    setNotes(prevNotes => {
        const updated = prevNotes.filter(
            (_, idx) => idx !== idxToDelete
        );

        return updated;
    });
};


export const editNote = (idxToEdit, setNotes, setTitle, setDetails, notes) => {
    setTitle(notes[idxToEdit].title)
    setDetails(notes[idxToEdit].details)
    deleteNote(idxToEdit, setNotes);
}


export const submitHandler = (title, details, setNotes, setTitle, setDetails, notes) => {
    const notesCopy = [...notes];
    notesCopy.push({ title, details })
    setNotes(notesCopy)

    setTitle('')
    setDetails('')
}