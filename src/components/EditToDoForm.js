import { useState, useEffect } from 'react'

const EditToDoForm = props => {
  const [ toDo, setToDo ] = useState(props.currentToDo)

  useEffect(
    () => {
      setToDo(props.currentToDo)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setToDo({ ...toDo, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateToDo(toDo.id, toDo)
      }}
    >
      <label>Name</label>
      <input type="text" name="toDo" value={toDo.toDo} onChange={handleInputChange} />
      <button>Update To Do</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditToDoForm