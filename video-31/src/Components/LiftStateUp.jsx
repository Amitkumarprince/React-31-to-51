import { useState } from "react"

export const LiftStateUp = () => {
    const [inputValue, setInputValue] = useState("")

    return (
        <>
            <InputComponent InputValue={inputValue} SetInput={setInputValue} />
            <DisplayComponent InputValue={inputValue} />
        </>
    )
}

const InputComponent = ({InputValue, SetInput}) => {
    // create input value 
    // const [inputValue, setInputValue] = useState("")
    // ise sift ker diya parent ko (yaha na create kerke upar create kiya gaye)
    return (
        <>
            <input type="text" 
            placeholder="Enter your name" 
            value={InputValue}
            onChange={(e)=> SetInput(e.target.value)}
            />
        </>
    )
}
const DisplayComponent = ({InputValue}) => {
    return (
        <>
    <p>The current input value is: {InputValue} </p>
        </>
    )
}