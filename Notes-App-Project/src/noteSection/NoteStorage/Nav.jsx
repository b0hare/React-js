import Edit from './EditIcon'
import Delete from './DeleteIcon'

function Nav(props) {
    function savedHeading() {
        props.notes.forEach(note => {
            console.log(note.title, note.details);
        });
    }
    return (
        <nav onClick={savedHeading} className="flex items-center justify-between p-2 bg-black">
            {props.notes.map(function (elem, idx) {
                return (
                    <h2 key={idx} className="showHeading font-semibold">{elem.title}</h2>)
            })}
            <div className="right flex items-center gap-3">
                <Edit />
                <Delete />
            </div>
        </nav >
    )
}

export default Nav