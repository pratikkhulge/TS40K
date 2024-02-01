import React , {useState} from 'react'
import UseTodos from './Components/UseTodos'
function App() {

  // const [todo, setTodo] = useState(["Code","Eat","Drink"]);
  // const [Value, setValue] = useState('');

  // const add = (e) => {
  //   e.preventDefault();
  //   if (Value.trim() !== '') {
  //     setTodo([...todo, Value]);
  //     setValue('');
  //   }
  // };

  // const Remove = (index) => {
  //   todo.splice(index, 1);
  //   setTodo([...todo]);
  // };

  // const Edit = (index, todos) => {
  //   setValue(todos);
  //   todo.splice(index, 1);
  //   setTodo([...todo]);
  // };


  const { todo,
    Value,
    setValue,
    add,
    Remove,
    Edit} = UseTodos()


  return (
    <div>
      <form onSubmit={add}>
        <input type="text" value={Value} onChange={(e) => { setValue(e.target.value) }} />
        <button type="submit">Add</button>
      </form>
      <ul>{todo.map((todo, index) => (<li key={index}>Task{index + 1}. {todo}  <button onClick={() => Remove(index)}>Remove</button> <button onClick={() => Edit(index, todo)}>Edit</button></li>))}</ul>
    </div>
  )
}

export default App


