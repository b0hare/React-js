import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'
import NoteSheet from './NoteSheet';
import NoteStorage from './NoteStorage/NoteStorage';

function NoteSection() {

    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const [notes, setNotes] = useState([])

    const submitHandler = () => {
        const notesCopy = [...notes];
        notesCopy.push({title, details})
        setNotes(notesCopy)
        console.log(notes);
        
        setTitle('')
        setDetails('')
    }

    return (

        <div className="noteSection w-full flex flex-col sm:flex-row items-center sm:items-start">

            <NoteSheet title={title} setTitle={setTitle} details={details} setDetails={setDetails} submitHandler={submitHandler}/>

            <span className='border-1 border-solid border-[#111] sm:h-100'></span>

            <NoteStorage notes={notes}/>

        </div>
    )
}

export default NoteSection