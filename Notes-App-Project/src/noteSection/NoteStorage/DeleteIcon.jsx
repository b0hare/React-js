import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
function Delete() {
    return (
        <FontAwesomeIcon className='cursor-pointer' icon={faTrash} onClick={() => {
            console.log("Deleted!");
            
        }} />
    )
}

export default Delete