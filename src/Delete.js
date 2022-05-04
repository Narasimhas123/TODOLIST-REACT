function Delete({ deleteTodo, todo }) {
  return (
    <div>
      <button onClick={() => deleteTodo(todo.id)} className="btn-delete">
        delete
      </button>
    </div>
  );
}

export default Delete;
