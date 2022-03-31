import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes.js';


export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));

todoList.todos[0].imprimirClase();

console.log('Todos', todoList.todos);












// const tarea = new Todo(' Aprender JavaScript!!');

// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key', 'ABC12345');
// sessionStorage.setItem('mi-key', 'ABC12345');

// setTimeout(() => {

//   localStorage.removeItem('mi-key');
// }, 1500);


