import SavedNotes from "./SavedNotes"

function NoteStorage(props) {
    return (
        <div className="noteStorage w-full h-full p-5 sm:w-1/2">
            <h2 className='text-[24px] font-bold text-center w-full border-b-2 border-solid border-b-[#333333] p-[1px]'>Saved Notes</h2>

            <div className="notesContainer flex gap-2 justify-center m-1 flex-wrap">
                <SavedNotes notes={props.notes}/>
                <SavedNotes notes={props.notes}/>
                <SavedNotes notes={props.notes}/>
            </div>
        </div>
    )
}

export default NoteStorage