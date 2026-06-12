import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenNib} from '@fortawesome/free-solid-svg-icons';

function Edit() {
    return (
        <FontAwesomeIcon className='cursor-pointer' icon={faPenNib} onClick={() => {
            console.log('Editing..');

        }} />
    )
}

export default Edit