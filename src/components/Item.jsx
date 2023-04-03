import {useDispatch} from "react-redux";
import {deleteTodo, doneTodo} from "../store/todos/todos-actions";

export function Item({id, isActive, text}) {
    const dispatch = useDispatch();

    const textLine = () => {
        if (isActive) {
            return({
                textDecoration: 'line-through',
                color: 'rgba(255, 255, 255, 0.1)',
            })
        }
    }

    return (
        <div className="todo__item item">
            <div className="item__wrapper">
                <label>
                    <input type="checkbox" className="item__check"
                           onChange={(e) => dispatch(doneTodo(id, e.target.checked))}
                           checked={isActive}/>
                    <span className="item__checkmark checkmark"></span>
                    <p className="item__text" style={textLine()}>{text}</p>
                </label>
                <button onClick={() => dispatch(deleteTodo(id))} className="item__button delete"></button>
            </div>
        </div>
    )
}
