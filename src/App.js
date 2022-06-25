import { useState, Fragment  } from 'react';

import ToDoListTable from './components/ToDoListTable';
import AddToDoForm from './components/AddToDoForm';
import EditToDoForm from './components/EditToDoForm';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const toDosData = [
    { id: 1, toDo: 'Memasak'},
    { id: 2, toDo: 'Menyuci'},
    { id: 3, toDo: 'Memandangmu'},
  ]

  const initialFormState = { id: null, toDo: '' }

  const [toDos, setToDos] = useState(toDosData);
	const [ currentToDo, setCurrentToDo ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
  

  const addToDo = toDo => {
    toDo.id = toDos.length + 1
    setToDos([...toDos, toDo])
  }


  const deleteToDo = id => {
    setEditing(false)
    setToDos(toDos.filter(toDo => toDo.id !== id))
  }

  const updateToDo = (id, updatedToDo) => {
		setEditing(false)

		setToDos(toDos.map(toDo => (toDo.id === id ? updatedToDo : toDo)))
	}

	const editRow = toDo => {
		setEditing(true)

		setCurrentToDo({ id: toDo.id, toDo: toDo.toDo})
	}

  return (
    <div className='container mt-5 text-center'>
      <h2>To Do List Application with React JS</h2>
      <div>
        {editing ? (
            <Fragment>
              <h2>Edit To Do</h2>
              <EditToDoForm
                editing={editing}
                setEditing={setEditing}
                currentToDo={currentToDo}
                updateToDo={updateToDo}
              />
            </Fragment>
        
        ) : (
          <Fragment>

              <h4 className='mt-5'>Add To Do</h4>
              <AddToDoForm addToDo={addToDo} />
          
          </Fragment>
        )}
      </div>
      <h4 className='mt-5'>List To Do</h4>
      <ToDoListTable toDos={toDos} editRow={editRow} deleteTodo={deleteToDo} />
    </div>
  )
}

export default App