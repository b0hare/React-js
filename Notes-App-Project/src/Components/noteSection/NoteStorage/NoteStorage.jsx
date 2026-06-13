import SavedNotes from "./SavedNotes"

function NoteStorage(props) {

    return (
        <div className="noteStorage w-full h-full p-5 sm:w-1/2">
            <h2 className='text-[24px] font-bold text-center w-full border-b-2 border-solid border-b-[#333333] p-[1px]'>Saved Notes</h2>

            <div className="notesContainer flex gap-2 justify-center flex-wrap">
                {
                    props.notes.map(function (elem, idx) {
                        return (
                            <SavedNotes notes={props.notes} key={idx} note={elem} idx={idx} setNotes={props.setNotes} setTitle={props.setTitle} setDetails={props.setDetails} deleteNote={props.deleteNote} editNote={props.editNote}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NoteStorage