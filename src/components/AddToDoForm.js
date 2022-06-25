import { useState } from "react";

const AddToDoForm = props => {
    const initialFormState = { id: null, toDo: ''}
    const [toDo, setToDo] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target
      
        setToDo({ ...toDo, [name]: value })
    }
    
    return (
        <form onSubmit={event => {
            event.preventDefault()
            if (!toDo.toDo) return

            props.addToDo(toDo);
            setToDo(initialFormState);
        }}>
            <label>To Do</label>
            <input type="text" name="toDo" value={toDo.toDo} onChange={handleInputChange} />
            <button>Add new to dos</button>
        </form>
    )
}

export default AddToDoForm;