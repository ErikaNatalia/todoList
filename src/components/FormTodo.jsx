import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const sendIncon = <FontAwesomeIcon icon={faPaperPlane} /> /* IconFormFA */
const FormTodo = props => {
    const [description, setDescription] = useState("");
    const{handleAddItem} = props;  //Atributo
    
    const handleSubmit = e =>{
        e.preventDefault();
        //console.log(description);
        handleAddItem({
            done: false,
            id:(+new Date()).toString(),
            description
        });
        setDescription("");
    };
    return(
        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="file-input">
                    <input 
                    type="text"
                    className="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}/> {/* Escucha cuando el estado cambia */}
                    <button
                    className="button golden" 
                    icon={faPaperPlane}
                    disabled={description ? "": "disbaled"}
                    >{sendIncon}</button>
                </div>
            </div>
        </form>
    )
};

export default FormTodo;