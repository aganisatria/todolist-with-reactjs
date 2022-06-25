const ToDoListTable = props => {
    return (
    <table className='table'>
        <thead>
            <tr>
                <th scope='col'>Id</th>
                <th scope='col'>To Do</th>
                <th scope='col'>Action</th>
            </tr>
        </thead>
        <tbody>
            {props.toDos.length > 0 ? (
                props.toDos.map((toDo) => (
                    <tr key={toDo.id}>
                        <td>{toDo.id}</td>
                        <td>{toDo.toDo}</td>
                        <td>
                            <button onClick={() => {props.editRow(toDo)}} className="btn btn-primary">Edit</button>        
                            <button onClick={() => props.deleteToDo(toDo.id)} className="btn btn-danger">Delete</button>        
                        </td>
                    </tr>
                ))
            ) : (
            <tr>
                <td colSpan={3}>Data belum ditambahkan.</td>
            </tr>
            )}
        </tbody>
    </table>
    )
}

export default ToDoListTable;