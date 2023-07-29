import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    todos: [],
    todosComplete: [],
    openPopup: false,
    openPopupForEdit: false,
    openFullTodo: false,
    displayFullTodo: {
        title: '',
        description: ''
    },
    displayForEdit: {
        title: '',
        description: '',
        importance: ''
    }
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        changePopup: (state, action) => {
            state.openPopup = action.payload
        },
        changePopupForEdit: (state, action) => {
            state.openPopupForEdit = action.payload
        },
        changeFullTodo: (state, action) => {
            state.openFullTodo = action.payload
        },
        changeDisplayFullTodo: (state, action) => {
            state.displayFullTodo = action.payload
        },
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload]
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        editTodo: (state, action) => {
            const {title, description, id, importance} = action.payload
            state.displayForEdit = {title, description, importance}
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    changePopup,
    addTodo,
    deleteTodo,
    changeFullTodo,
    changeDisplayFullTodo,
    editTodo,
    changePopupForEdit
} = todosSlice.actions

export default todosSlice.reducer