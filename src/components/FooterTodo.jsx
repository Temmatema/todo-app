import {selectTodos} from "../store/todos/todos-selectors";
import {useDispatch, useSelector} from "react-redux";
import {clearCompleted} from "../store/todos/todos-actions";
import {selectFilter} from "../store/filters/filter-selectors";
import {setState} from "../store/filters/filter-actions";

export function FooterTodo({handleBorderStyle = Function.prototype}) {
    const todos = useSelector(selectTodos);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
    const countLeft = todos.filter(el => !el.isActive)


    return (
        <div className="todo__footer todo-footer" style={handleBorderStyle()}>
            <div className="todo-footer__wrapper">
                <p className="todo-footer__count">
                    <span style={{width: '13px', display: 'inline-block'}}>{countLeft.length}</span> items left</p>
                <div className="todo-footer__btn-wrapper">
                    <button className="todo-footer__filter-btn"
                            style={filter === 'all' ? {color: '#4a72c4'}
                                : {color: 'rgba(255, 255, 255, 0.3)'}}
                            onClick={() => dispatch(setState('all'))}
                    >All
                    </button>
                    <button className="todo-footer__filter-btn"
                            style={filter === 'active' ? {color: '#4a72c4'}
                                : {color: 'rgba(255, 255, 255, 0.3)'}}
                            onClick={() => dispatch(setState('active'))}
                    >Active
                    </button>
                    <button className="todo-footer__filter-btn"
                            style={filter === 'completed' ? {color: '#4a72c4'}
                                : {color: 'rgba(255, 255, 255, 0.3)'}}
                            onClick={() => dispatch(setState('completed'))}
                    >Completed
                    </button>
                </div>
                <button className="todo-footer__clear" onClick={() => dispatch(clearCompleted())}>Clear Completed
                </button>
            </div>
        </div>
    )
}
