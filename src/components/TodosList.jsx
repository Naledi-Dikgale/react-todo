import TodoItem from './TodoItem';
const TodosList = ({ todosProps }) => {
    return (
      <ul>
        {todosProps.map((todo) => (

          <TodoItem key={todo.id} itemProp={todo} />
        ))}
      </ul>
    );
  };
  export default TodosList;
  