import { observer } from 'mobx-react-lite';
import './App.css';
import todo from './store/todo';

const Todo = observer ( () => {
  return (
    <>
      {todo.todos.map ( t =>
        <div key={t.id}>
            <input type="checkbox" checked={t.complited} onChange={ () => todo.compliteTodo(t.id) }/>
            {t.title}
            <button onClick={ () => todo.removeTodo(t.id) } >x</button>
        </div>
      
      )}
    </>
  )
})

export default Todo;