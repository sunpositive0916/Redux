export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

export const SHOW_DONE = "SHOW_DONE";
export const SHOW_ALL = "SHOW_ALL";

export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
});

export const completeTodo = (index) => ({
  type: COMPLETE_TODO,
  index,
});

export const showDone = () => ({ type: SHOW_DONE });
export const showAll = () => ({ type: SHOW_ALL });

// 예상 state => ["장보기", "산책하기"];
// 변경 state => [{text: "장보기", done: false}, {text: "산책하기", done: false}];
// 변경 state => {todos: [{text: "장보기", done: false}, {text: "산책하기", done: false}], filter: 'SHOW_ALL'}

// 최초의 상태값
// [] => [] => {todos: [], filter: 'SHOW_ALL'}
