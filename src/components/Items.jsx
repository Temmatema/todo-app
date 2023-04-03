import {useSelector} from "react-redux";
import {selectTodos} from "../store/todos/todos-selectors";
import {Item} from "./Item";

export function Items() {
    const todos = useSelector(selectTodos);

    return(
        <div className="todo__list">
            {
                todos.map(el => {
                    return <Item key={el.id} {...el}/>
                })
            }
        </div>
    )
}



/*
<div className="todo__item item">
    <div className="item__wrapper">
        <label>
            <input type="checkbox" className="item__check"/>
            <span className="item_checkmark checkmark"></span>
            <p className="item__text" >Good morning!</p>
        </label>
    </div>
</div>*/
