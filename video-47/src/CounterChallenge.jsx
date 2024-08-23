import { useState } from "react"

const CounterChallenge = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    const handleIncrement = () => {
        // if (count == 100) return
        setCount(count + step)
    }
    const handleDecrement = () => {
        // if (count == 0) return
        setCount(count - step)
    }
    const handleReset = () => {
        setCount(0)
    }

    return (
        <div>
            <h1>useState challenge</h1>

            <p>
                Count: <span>{count} </span>
            </p>

            <div>
                <label>
                    Step:
                    <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} />
                </label>
            </div>

            <div>
                <button onClick={handleIncrement} disabled={count >= 100} >Increment</button>
                <button onClick={handleDecrement} disabled={count == 0} >Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default CounterChallenge;