import {TypeTodos} from "./components/TypeTodos";
import {Items} from "./components/Items";
import {FooterTodo} from "./components/FooterTodo";
import {selectTodos} from "./store/todos/todos-selectors";
import {useSelector} from "react-redux";

function App() {
    const todos = useSelector(selectTodos);

    const handleBorderStyle = () => {
        if (!todos.length) {
            return({
                borderRadius: '7px 7px 7px 7px',
            })
        }
    }

    return (
        <div className="App">
            <div className="todo">
                <TypeTodos/>
                <Items/>
                <FooterTodo handleBorderStyle={handleBorderStyle} />
            </div>
        </div>
    );
}

export default App;
