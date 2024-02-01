import React from 'react'
import { useState } from 'react';

function UseTodos() {
      const [todo, setTodo] = useState(["Code","Eat","Drink"]);
  const [Value, setValue] = useState('');

  const add = (e) => {
    e.preventDefault();
    if (Value.trim() !== '') {
      setTodo([...todo, Value]);
      setValue('');
    }
  };

  const Remove = (index) => {
    todo.splice(index, 1);
    setTodo([...todo]);
  };

  const Edit = (index, todos) => {
    setValue(todos);
    todo.splice(index, 1);
    setTodo([...todo]);
  };
  
    return {
      todo,
      Value,
      setValue,
      add,
      Remove,
      Edit,
    };
  }

export default UseTodos;