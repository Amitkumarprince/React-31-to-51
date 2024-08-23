import { useState } from "react"
import "./Todo.css"
import { MdCheck, MdDelete } from "react-icons/md";

// 10:00
export const Todo = () => {
    const [inputValue, setInputValue] = useState("")
    const [task, setTask] = useState([])

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
    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
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
} // 34:00 end

// //////////// 30:30 //////////////
// export const Todo = () => {
//     const [inputValue, setInputValue] = useState("")
//     const [task, setTask] = useState([])

//     const handleInputValue = (value) => {
//         setInputValue(value);
//     }

//     const handleFormSubmit = (event) => {
//         event.preventDefault();

//         if (!inputValue) return;

//         // for checking in present
//         if(task.includes(inputValue)){
//             setInputValue("")
//             return;
//         }

//         setTask((prevTask) => [...prevTask, inputValue]);

//         setInputValue("")
//     }
//     return (
//         <section className="todo-container">
//             <header>
//                 <h1>Todo List</h1>
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

//         </section>
//     )
// }

// ///////// 26:00 //////////
// export const Todo = () => {
//     const [inputValue, setInputValue] = useState("")
//     const [task, setTask] = useState([])

//     const handleInputValue = (value) => {
//         setInputValue(value);
//     }

//     const handleFormSubmit = (event) => {
//         event.preventDefault();

//         if (!inputValue) return;

        // // setTask((prevTask) => console.log(prevTask));
        // setTask((prevTask) => [...prevTask, inputValue]);

//     }

//     return (
//         <section className="todo-container">
//             <header>
//                 <h1>Todo List</h1>
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

//         </section>
//     )
// }


// //////////// 21:00 //////////////////////
// preventDefault (चूक को रोकें)
// page ko refresh hone se rokta hai

// export const Todo = () => {
//     const [inputValue, setInputValue] = useState("")

//     const handleInputValue=(value)=>{
//         setInputValue(value);
//     }

//     const handleFormSubmit=(event)=>{
//         event.preventDefault();
//     }
//     return (
//         <section className="todo-container">
//             <header>
//                 <h1>Todo List</h1>
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

//         </section>
//     )
// }


/////////////////// 18:50 ////////////////////
// export const Todo = () => {
//     const [inputValue, setInputValue] = useState("")

//     const handleInputValue=(value)=>{
//         setInputValue(value);
//     }
//     return (
//         <section className="todo-container">
//             <header>
//                 <h1>Todo List</h1>
//             </header>

//             <section className="form">
//                 <form>
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

//         </section>
//     )
// }



// ///////////// 13:30  //////////////////
// export const Todo = () => {
//     return (
//         <section className="todo-container">
//             <header>
//                 <h1>Todo List</h1>
//             </header>

//             <section className="form">
//                 <form>
//                     <div>
//                         <input type="text" className="todo-input" autoComplete="off" />
//                     </div>
//                     <div>
//                         <button type="submit" className="todo-btn">
//                             Add Task
//                         </button>
//                     </div>
//                 </form>
//             </section>

//         </section>
//     )
// }