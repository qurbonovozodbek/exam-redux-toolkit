import { useRef } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { IoCheckmark } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { GiReturnArrow } from "react-icons/gi";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { addTodo, removeTodo, toggleTodo } from './redux/createTodo';

function App() {
  const todoRef = useRef();
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todo); 
  const comp = useSelector(state => state.todo.todo);
  console.log(comp);
  console.log(todos);

  function validate(todo) {
    if (todo.current.value.trim().length === 0) {
      alert('Please enter a todo');
      return false;
    }
    return true;
  }

  function handleTodo(e) {
    e.preventDefault();
    if (validate(todoRef)) {
      const newTodo = {
        id: Date.now(),
        title: todoRef.current.value,
        completed: false,
      };
      dispatch(addTodo(newTodo));
      todoRef.current.value = '';
    }
  }

  function handleDelete(todoId) {
    dispatch(removeTodo(todoId));
  }

  function handleChecked(todoId) {
    dispatch(toggleTodo(todoId));
  }

  return (
    <div className="container">
      <form>
        <input type="text" ref={todoRef} placeholder='Add a new task'/>
        <button onClick={handleTodo}>+</button>
      </form>
      <div className="list">
        <h3>Tasks to do</h3>
        <div className="cards">
        {
              todos.filter(todo => !todo.completed).map(todo => (
                <div className="card" key={todo.id}>
                  <h4>{todo.title}</h4>
                  <div className="action">
                    <button onClick={() => handleChecked(todo.id)}> <IoCheckmark /> </button>
                    <button onClick={() => handleDelete(todo.id)}> <AiOutlineDelete /> </button>
                  </div>
                </div>
              ))
            }
        </div>
        <div className="cards">
            <h3>Done</h3>
            {
              todos.filter(todo => todo.completed).map(todo => (
                <div className="card" key={todo.id}>
                  <h4 className='lineThrow'>{todo.title}</h4>
                  <div className="action">
                  <button onClick={() => handleChecked(todo.id)}> <IoReturnDownBackOutline /> </button>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  );
}

export default App;
