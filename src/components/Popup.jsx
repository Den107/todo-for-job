import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changePopup, addTodo} from "../features/todos/todosSlice";
import {v4 as uuidv4} from 'uuid';

const Popup = () => {
    const isOpen = useSelector(state => state.todos.openPopup)
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [importance, setImportance] = useState('')

    const changeImportance = (e) => {
        setImportance(e.target.value)
    }
//todo сделать проверку на пустые поля
    const createTodo = () => {
        const todo = {
            id: uuidv4(),
            title, description, importance
        }
        dispatch(addTodo(todo))
        setTitle('')
        setDescription('')
        setImportance('')
        dispatch(changePopup(false))
    }


    return (
        <div className="todo__popup popup" style={isOpen ? {display: 'flex'} : {display: 'none'}}>

            <div className="popup__form">
                <h2>Создание задачи</h2>
                <input type="text" placeholder="Название задачи" value={title}
                       onChange={e => setTitle(e.target.value)}/>
                <textarea placeholder="Описание задачи" value={description}
                          onChange={e => setDescription(e.target.value)}></textarea>
                <div>
                    <label>Важная <input type="radio" name="importance" value={'red'}
                                         onChange={e => changeImportance(e)}/></label>
                    <label>Обычная <input type="radio" name="importance" value={'yellow'}
                                          onChange={e => changeImportance(e)}/></label>
                    <label>Незначительная <input type="radio" name="importance" value={'green'}
                                                 onChange={e => changeImportance(e)}/></label>
                </div>
                <div>
                    <button onClick={createTodo}>Сохранить</button>
                    <button onClick={() => dispatch(changePopup(false))}>Отмена</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;