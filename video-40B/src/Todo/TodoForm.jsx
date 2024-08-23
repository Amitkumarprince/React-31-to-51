import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState({})

    const handleInputValue = (value) => {
        setInputValue({ id: value, content: value, checked: false });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        onAddTodo(inputValue)
        // setInputValue("")
        setInputValue({ id: "", content: "", checked: false });

    }

    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text"
                        className="todo-input"
                        autoComplete="off"
                        value={inputValue.content}
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
    )
}