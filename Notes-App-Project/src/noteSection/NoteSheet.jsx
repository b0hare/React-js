import Heading from "./Heading";
import Detail from "./NotesDetail";
import Btns from './Buttons';
import { useState } from 'react'

function NoteSheet(props) {

    // const [Title, setTitle] = useState("")
    // const [Details, setDetails] = useState("")

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props.submitHandler();
            console.log("form submitted!");
            // console.log(props.title, props.details);

            props.setTitle("")
            props.setDetails("")

        }} className="min-w-80 lg:w-1/2 h-1/2 md:w-1/2 w-70  p-5 rounded-md noteSheet flex flex-col gap-2">
            <Heading title={props.title} setTitle={props.setTitle} />
            <Detail details={props.details} setDetails={props.setDetails} />
            <Btns />
        </form>
    )
}

export default NoteSheet;