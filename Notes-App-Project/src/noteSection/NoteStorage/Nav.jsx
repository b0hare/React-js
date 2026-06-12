import Edit from './EditIcon'
import Delete from './DeleteIcon'

function Nav(props) {
    return (
        <nav className="flex items-center justify-between p-2 bg-black">
            <h2 className="showHeading font-semibold">{props.notes.title}</h2>
            <div className="right flex items-center gap-3">
                <Edit />
                <Delete />
            </div>
        </nav>
    )
}

export default Nav