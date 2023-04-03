import {useDispatch} from "react-redux";
import {addTodo} from "../store/todos/todos-actions";

export function TypeTodos() {
    const dispatch = useDispatch();

    const handleKey = (e) => {
        if (e.key === 'Enter' ) {
            if (e.target.value.length > 0) {
                dispatch(addTodo(e.target.value));
                e.target.value = '';
                e.target.style.outline = 'none';
            } else {
                e.target.style.outline = '1px solid #a93b3b';
            }
        }
    }

    return(
        <div className="todo__type">
            <div className="todo__type--wrapper">
                <h1 className='todo__type--title'>todo</h1>
                <input type="text" className="todo__type--field"
                       onKeyDown={handleKey}
                       autoFocus
                       placeholder='Write your todo...'/>
            </div>
        </div>
    )
}
