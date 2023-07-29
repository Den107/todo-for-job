import React, {useState} from 'react';
import {changePopup, changePopupForEdit} from "../features/todos/todosSlice";
import {useDispatch, useSelector} from "react-redux";

const PopUpForEdit = () => {
    const dispatch = useDispatch()
    const isOpen = useSelector(state=>state.todos.openPopupForEdit)
    const obj = useSelector(state=>state.todos.displayForEdit)

    console.log(obj.description, obj.title )
//todo понять причину почему не записываются данные в usestate
    const [importance, setImportance] = useState(obj.importance)
    const [title, setTitle] = useState(obj.title)
    const [description, setDescription] = useState(obj.description)

    const changeImportance = (e) => {
        setImportance(e.target.value)
    }
    console.log(title, description, importance)
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
                    <button >Сохранить</button>
                    <button onClick={() => dispatch(changePopupForEdit(false))}>Отмена</button>
                </div>
            </div>
        </div>
    );
};

export default PopUpForEdit;