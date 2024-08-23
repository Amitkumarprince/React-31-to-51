import { useState } from "react"

export const Counter = () => {
    // console.log(useState(3))
    const [count, setCount] = useState(0)

    const handleIncrement =()=>{
        setCount(count + 1);
        console.log("inner", count)
    }
    console.log("outer", count)

    return (

        <div className="container state-counter" style={{ textAlign: "center" }}>
            <h1 style={{ color: "black" }}>useState Hooks!</h1>
            <br />
            <p>{count}</p>
            {/* <button className="state-button" onClick={() => setCount(count + 1)}>Increment </button> */}
            <button className="state-button" onClick={handleIncrement}>Increment </button>
        </div>
    )
}