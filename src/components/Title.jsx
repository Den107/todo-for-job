import React from 'react';
import {useDispatch} from "react-redux";
import {changePopup} from "../features/todos/todosSlice";

const Title = () => {
const dispatch = useDispatch()


    return (
        <div className="todo__title">У вас сегодня <span>7</span> задач <button onClick={()=>dispatch(changePopup(true))}>
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="30" height="30" viewBox="0 0 18 18" fill="none">
                <g clipPath="url(#clip0_1_45)">
                    <path
                        d="M13.5 15H4.5C3.67125 15 3 14.3288 3 13.5V4.5C3 3.67125 3.67125 3 4.5 3H13.5C14.3288 3 15 3.67125 15 4.5V13.5C15 14.3288 14.3288 15 13.5 15Z"
                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 6V12" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M12 9H6" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_1_45">
                        <rect width="18" height="18" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </button></div>
    );
};

export default Title;