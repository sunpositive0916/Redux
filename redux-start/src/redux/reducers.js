import { ADD_TODO } from "./actions";

// state
// ['코딩', '점심 먹기'];

const initialState = [];


export function todoApp(previusState = initialState, action) {
    // 초기값 설정
    // initialState를 통해 초기화 시킴
    // if(previusState === undefined) {
    //     return [];
    // }

    if(action.type ===ADD_TODO) {
        return [...previusState, action.todo];
    }

    return previusState;
}