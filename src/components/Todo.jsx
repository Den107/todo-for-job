import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTodo} from "../features/todos/todosSlice";

const Todo = ({importance, title, description, id}) => {
    const dispatch = useDispatch()

    const removeTodo = ()=>{
        if(window.confirm(`Действительно хотите удалить задачу ${title}?`)){
            dispatch(deleteTodo(id))
        }
    }

    const chooseImportance = () => {
        switch (importance) {
            case 'red':
                return (<p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="3" stroke="#EB5757" strokeWidth="2"/>
                    </svg>
                    Важная
                </p>)

            case 'yellow':
                return (<p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="3" stroke="#F2C94C" strokeWidth="2"/>
                    </svg>
                    Обычная
                </p>)

            case 'green':
                return (<p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="3" stroke="#219653" strokeWidth="2"/>
                    </svg>
                    Незначительная
                </p>)

        }
    }

    return (
        <div className="list__todo todo">
            <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10"
                     fill="none">
                    <ellipse cx="4.5" cy="5" rx="4.5" ry="5" fill="url(#paint0_linear_1_168)"
                             fillOpacity="0.2"/>
                    <ellipse cx="4.50078" cy="5.0493" rx="2.7" ry="2.85789" fill="url(#paint1_linear_1_168)"
                             fillOpacity="0.7"/>
                    <defs>
                        <linearGradient id="paint0_linear_1_168" x1="0.332031" y1="-0.334873" x2="9.8991"
                                        y2="7.95048"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F3477A"/>
                            <stop offset="1" stopColor="#884CB2"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_1_168" x1="2" y1="2" x2="7.5" y2="7"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F3477A"/>
                            <stop offset="1" stopColor="#884CB2"/>
                        </linearGradient>
                    </defs>
                </svg>
                {title}
            </h3>
            <button className="todo__complete-button">Завершить</button>
            {chooseImportance()}
            <div>
                <button onClick={removeTodo}><i className="fa-solid fa-trash" style={{color: '#cd1326'}}></i></button>
                <button><i className="fa-solid fa-pen-to-square" style={{color: '#1fbda2'}}></i></button>
            </div>
        </div>
    );
};

export default Todo;