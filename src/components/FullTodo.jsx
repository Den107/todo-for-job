import React, {useState} from 'react';
import {changeFullTodo, changePopup} from "../features/todos/todosSlice";
import {useDispatch, useSelector} from "react-redux";

const FullTodo = ({ isOpen}) => {
    const isOpening = useSelector(state=>state.todos.openFullTodo)
    const displayTodo = useSelector(state=>state.todos.displayFullTodo)
const dispatch = useDispatch()



    return (
        <div className="todo__popup popup" style={isOpening ? {display: 'flex'} : {display: 'none'}}>

            <div className="popup__form">
                <h2>Описание задачи</h2>
                <input type="text" placeholder="Название задачи" value={displayTodo.title}
                />
                <textarea placeholder="Описание задачи" value={displayTodo.description}
                ></textarea>

                <div>

                    <button onClick={()=>dispatch(changeFullTodo(false))}>&times;</button>
                </div>
            </div>
        </div>
    );
};

export default FullTodo;