import React from 'react';
import {BrowserRouter as Router, Routes, Route,  Link } from 'react-router-dom';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import AddTodo from './pages/AddTodo';
import './App.css';
import Register from './pages/register';
import Login from './pages/login';

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
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<TodoList />} />
            <Route path="/add-todo" element={<AddTodo />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
