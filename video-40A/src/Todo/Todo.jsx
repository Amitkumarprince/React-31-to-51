import { useState } from "react"
import "./Todo.css"
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

let todokey = "reactTodo"

export const Todo = () => {
    const [task, setTask] = useState(() => {
        const rawTodos = localStorage.getItem(todokey)
        if (!rawTodos) return [];

        return JSON.parse(rawTodos)
    })


    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;

        // to check if the input field is empty or not
        if (!content) return;

        // to check if the data is already existing or not
        // if (task.includes(inputValue)) return;
        const ifTodoContentMatched = task.find(
            (curTask) => curTask.content === content
        );
        if (ifTodoContentMatched) return;

        // setTask((prevTask) => [...prevTask, inputValue]);
        setTask((prevTask) => [...prevTask,
        // { id: id, content: content, checked: checked }
        { id, content, checked }
        ])
    }

    localStorage.setItem(todokey, JSON.stringify(task))


    // Todo handleDeleteTodo function
    const handleDeleteTodo = (value) => {
        // console.log(task)
        // console.log(value)
        const updatdTask = task.filter((curTask) => curTask.content !== value)
        setTask(updatdTask)
    }

    // todo handleClearTodoData function
    const handleClearTodoData = () => {
        // console.log(task)
        setTask([])
    }

    // todo onHandleCheckedTodo function
    const onHandleCheckedTodo = (content) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, checked: !curTask.checked }
            } else {
                return curTask;
            }
        })
        setTask(updatedTask)
    }


    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDate />
            </header>

            <TodoForm onAddTodo={handleFormSubmit} />

            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((curTask) => {
                            return (
                                <TodoList
                                    key={curTask.id}
                                    data={curTask.content}
                                    checked={curTask.checked}
                                    onHandleDeleteTodo={handleDeleteTodo}
                                    onHandleCheckedTodo={onHandleCheckedTodo}
                                />
                            )
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

