import Nav from './Nav'
import SavedDetails from './SaveDetails'

function SavedNotes(props) {
    return (
        <div className='w-[200px] h-50 bg-white flex flex-col rounded-md m-1'>
            <Nav notes={props.notes}/>
            <SavedDetails notes={props.notes}/>
        </div>
    )
}

export default SavedNotes