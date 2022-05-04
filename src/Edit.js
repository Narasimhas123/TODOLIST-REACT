function Edit({ setTodoEditing, todo, todoEditing, editTodo }) {
  return (
    <div>
      {todoEditing === todo.id ? (
        <button onClick={() => editTodo(todo.id)} className="btn-save">
          save
        </button>
      ) : (
        <button onClick={() => setTodoEditing(todo.id)} className="btn-edit">
          edit
        </button>
      )}
    </div>
  );
}

export default Edit;
