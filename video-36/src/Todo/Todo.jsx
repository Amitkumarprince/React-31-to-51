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
        console.log("Amit")
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
                                <button className="delete-btn">
                                    <MdDelete />
                                </button>
                            </li>
                        })
                    }
                </ul>
            </section>

        </section>
    )
}


// //////////// 12:00 ///////////
// export const Todo = () => {
//     const [inputValue, setInputValue] = useState("")
//     const [task, setTask] = useState([])
//     const [dateTime, setDateTime] = useState();

//     const handleInputValue = (value) => {
//         setInputValue(value);
//     }

//     const handleFormSubmit = (event) => {
//         event.preventDefault();

//         if (!inputValue) return;

//         // for checking in present
//         if (task.includes(inputValue)) {
//             setInputValue("")
//             return;
//         }

//         setTask((prevTask) => [...prevTask, inputValue]);

//         setInputValue("")
//         console.log("Amit")
//     }
//     // console.log("Amit")

//     // todo Date and Time
//     setInterval(() => {
//         const now = new Date()
//         const formattedDate = now.toLocaleDateString()
//         const formattedTime = now.toLocaleTimeString()

//         setDateTime(`${formattedDate} -${formattedTime}`)
//     }, 1000)

//     return (
//         <section className="todo-container">
//             <header>
//                 <h1>Todo List</h1>
//                 <h2 className="date-time">{dateTime}</h2>
//             </header>

//             <section className="form">
//                 <form onSubmit={handleFormSubmit}>
//                     <div>
//                         <input type="text"
//                             className="todo-input"
//                             autoComplete="off"
//                             value={inputValue}
//                             // onChange={(event) => setInputValue(event.target.value)} />
//                             onChange={(event) => handleInputValue(event.target.value)} />
//                     </div>
//                     <div>
//                         <button type="submit" className="todo-btn">
//                             Add Task
//                         </button>
//                     </div>
//                 </form>
//             </section>

//             <section className="myUnOrdList">
//                 <ul>
//                     {
//                         task.map((curTask, index) => {
//                             return <li key={index} className="todo-item">
//                                 <span>{curTask}</span>
//                                 <button className="check-btn">
//                                     <MdCheck />
//                                 </button>
//                                 <button className="delete-btn">
//                                     <MdDelete />
//                                 </button>
//                             </li>
//                         })
//                     }
//                 </ul>
//             </section>

//         </section>
//     )
// }
