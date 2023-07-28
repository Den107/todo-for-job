import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    todos: [],
    todosComplete: [],
    openPopup: false
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        changePopup: (state, action) => {
            state.openPopup = action.payload
        },
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload]
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const {changePopup, addTodo, deleteTodo} = todosSlice.actions

export default todosSlice.reducer