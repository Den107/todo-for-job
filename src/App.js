import Popup from "./components/Popup";
import Search from "./components/Search";
import Title from "./components/Title";
import Todo from "./components/Todo";
import TodoComplete from "./components/TodoComplete";
import {useSelector} from "react-redux";

function App() {
    const todos = useSelector(state=>state.todos.todos)
    const todosComplete = useSelector(state=>state.todos.todosComplete)


    return (
        <>
            <Popup/>
            <div className="todo__wrapper">

                <Search/>
                <Title/>

                <div className="todo__list list">
                    <div className="list__title">Выполняются</div>
                    {todos.length ? todos.map(todo => <Todo key={todo.id} importance={todo.importance} title={todo.title}
                                                            description={todo.description} id={todo.id}/>).reverse() :
                        <h2 style={{fontSize: '32px', marginTop: '20px'}}>Нет задач, добавьте новую</h2>}
                </div>


                <div className="todo__list list">
                    <div className="list__title">Завершены</div>
                    {todosComplete.length ? todosComplete.map(todo => <TodoComplete key={todo.id} importance={todo.importance}
                                                                                    title={todo.title}
                                                                                    description={todo.description} id={todo.id}/>) :
                        <h2 style={{fontSize: '32px', marginTop: '20px'}}>Нет завершенных задач :(</h2>}
                </div>
            </div>

        </>
    );
}

export default App;
