import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Content({ item, setItem, onCheckItem, deleteItem }) {


    return (
        <div className='ListData'>
            <ul className='ul-container'>

                {item.map((i) => (
                    <li className="list-row" key={i.id}>
                        <input className="checkbox"
                            type="checkbox"
                            id={i.id}
                            checked={i.checked}
                            onChange={() => onCheckItem(i.id)}
                        />
                        <label>{i.des}</label>
                        <button className="dlt-btn" onClick={() => deleteItem(i)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <div className="tooltip">
                            addedAt: {new Date(i.addedAt).toLocaleString()}
                        </div>

                    </li>
                ))

                }
            </ul>

        </div>
    )

}
export default Content;