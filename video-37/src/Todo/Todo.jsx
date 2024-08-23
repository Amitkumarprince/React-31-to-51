import { useEffect, useState } from "react"
import "./Todo.css"
import { MdCheck, MdDelete } from "react-icons/md";

export const Todo = () => {
    const [inputValue, setInputValue] = useState("")
    const [task, setTask] = useState([])
    const [dateTime, setDateTime] = useState();

    const handleInputValue = (value) => {
        setInputValue(value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!inputValue) return;

        // for checking in present
        if (task.includes(inputValue)) {
            setInputValue("")
            return;
        }

        setTask((prevTask) => [...prevTask, inputValue]);

        setInputValue("")
    }
    // console.log("Amit")

    // todo Date and Time
    // useEffect(()=>{}, []);
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date()
            const formattedDate = now.toLocaleDateString()
            const formattedTime = now.toLocaleTimeString()

            setDateTime(`${formattedDate} -${formattedTime}`)
        }, 1000)
        return () => clearInterval(interval)
    }, []);

    // Todo handleDeleteTodo function
    const handleDeleteTodo = (value) => {
        // console.log(task)
        // console.log(value)
        const updatdTask = task.filter((curTask) => curTask !== value)
        setTask(updatdTask)
    }

    // todo handleClearTodoData function
    const handleClearTodoData = () => {
        // console.log(task)
        setTask([])
    }


    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2 className="date-time">{dateTime}</h2>
            </header>

            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text"
                            className="todo-input"
                            autoComplete="off"
                            value={inputValue}
                            // onChange={(event) => setInputValue(event.target.value)} />
                            onChange={(event) => handleInputValue(event.target.value)} />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">
                            Add Task
                        </button>
                    </div>
                </form>
            </section>

            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((curTask, index) => {
                            return <li key={index} className="todo-item">
                                <span>{curTask}</span>
                                <button className="check-btn">
                                    <MdCheck />
                                </button>
                                <button className="delete-btn" onClick={() => handleDeleteTodo(curTask)}>
                                    <MdDelete />
                                </button>
                            </li>
                        })
                    }
                </ul>
            </section>

            <section>
                <button className="clear-btn" onClick={handleClearTodoData}>Clear all</button>
            </section>

        </section>
    )
}

