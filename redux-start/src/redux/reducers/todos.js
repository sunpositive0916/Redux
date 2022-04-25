import { ADD_TODO, COMPLETE_TODO } from "../actions";

const initialState = [];
export default function todos(previusState = initialState, action) {
    if(action.type === ADD_TODO) {
        return [...previusState, { text: action.text, done: false }];
    }

    if(action.type === COMPLETE_TODO) {
        return previusState.map((todo, index) => {
            if(index === action.index) {
                return {...todo, done: true}
            }
            return todo;
            })
    }

    return previusState;
}