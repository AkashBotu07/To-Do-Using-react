import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function AddItem({ addItemToList }) {
    const [newItem, setNewItem] = useState("")


    const handleAdd = () => {
        if (newItem.trim()) {
            addItemToList(newItem);
            setNewItem("");
        }
    };

    return (
        <div className='addItem'>
            <input className='addDataDes'
                name='ItemAdd'
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder='Type your Text Here'
            />
            <button className="add-btn" onClick={handleAdd} >
                <FontAwesomeIcon icon={faPlus} style={{ marginRight: "8px", color: "green",margin:'0px' }} />
                
            </button>

        </div>
    )
}

export default AddItem;