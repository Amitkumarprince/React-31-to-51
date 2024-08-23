import { useState } from "react"

export const Counter = () => {
    // console.log(useState(3))
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(0)

    const handleIncrement = () => {
        // if (count == 100) return
        setCount(count + step);
    }
    const handleDecrement = () => {
        // if (count == 0) return
        setCount(count - step);
    }
    const handleReset = () => {
        setCount(0);
    }

    return (

        <div className="container state-counter" style={{ textAlign: "center" }}>
            <h1 style={{ color: "black" }}>useState Hooks!</h1>
            <br />
            <p>Count: {count}</p>
            <div>
                <label>
                    Step
                    <input type="number" value={step} onChange={(event) => setStep(Number(event.target.value))} />
                </label>
            </div>
            <br />
            {/* <button className="state-button" onClick={() => setCount(count + 1)}>Increment </button> */}
            <button className="state-button" onClick={handleIncrement} disabled={count == 100}>Increment </button>
            <button className="state-button" onClick={handleDecrement} disabled={count <= 0} >Decrement </button>
            <button className="state-button" onClick={handleReset}>Reset </button>
        </div>
    )
}