import React from 'react';
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
function TodoItem({ id, text, completed }: Todo) {
  return (
    <li>
      <input type="checkbox" checked={completed} />
      {text}
    </li>
  );
}

export default TodoItem;
