import React from 'react';
import {BrowserRouter as Router, Routes, Route,  Link } from 'react-router-dom';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import AddTodo from './pages/AddTodo';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="sidebar">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todos">Todos</Link>
              </li>
              <li>
                <Link to="/add-todo">Add Todo</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<TodoList />} />
            <Route path="/add-todo" element={<AddTodo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
