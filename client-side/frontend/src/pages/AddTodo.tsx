import React, { useState } from 'react';

function AddTodo() {
  const [text, setText] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
     

    console.log('New Todo:', text);
    setText('');
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Enter todo" 
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
