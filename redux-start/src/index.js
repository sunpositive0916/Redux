import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { addTodo } from './redux/actions';

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// console.log(store);
store.dispatch(addTodo('coding'));
store.dispatch(addTodo('read a book'));
store.dispatch(addTodo('eat'));
unsubscribe(); // subscribe를 제거함
store.dispatch(addTodo('test')); // subscribe 함수가 실행 안되므로 log가 안찍힘

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
