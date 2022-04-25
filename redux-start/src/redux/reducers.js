import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE } from "./actions";

// state
// ['코딩', '점심 먹기'];
// [{text: '코딩', done: false}, {text: '{text: '코딩', done: false}', done: false}]
// {todos: [{text: '코딩', done: false}, {text: '{text: '코딩', done: false}', done: false}], filter: 'ALL'}
const initialState = {todos: [], filter: 'ALL'};


export function todoApp(previusState = initialState, action) {
    // 초기값 설정
    // initialState를 통해 초기화 시킴
    // if(previusState === undefined) {
    //     return [];
    // }

    if(action.type === ADD_TODO) {
        return {
            ...previusState,
            todos: [...previusState.todos, { text: action.text, done: false }]
        };
    }

    if(action.type === COMPLETE_TODO) {
        return {
            ...previusState,
            todos: previusState.todos.map((todo, index) => {
            if(index === action.index) {
                return {...todo, done: true}
            }
            return todo;
            })
        };
    }

    if(action.type === SHOW_COMPLETE) {
        return {
            ...previusState,
            filter: "COMPLETE"
        };
    }
    if(action.type === SHOW_ALL) {
        return {
            ...previusState,
            filter: "ALL"
        };
    }

    return previusState;
}