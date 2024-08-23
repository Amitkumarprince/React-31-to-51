import { useState } from "react"
import "./ToggleSwitch.css"

export const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);
    const handleToggleSwitch = () => {
        setIsOn(!isOn)
    }
    // console.log(isOn)
    const checkIsON = isOn ? "on" : "off"
    // const toggleBGColor = { background: isOn ? "#4caf50" : "#f44336" }
    return (
        <>
            <div className="toggle-switch"
                // style={toggleBGColor}
                onClick={handleToggleSwitch}
            >
                <div className={`switch ${checkIsON}`} >
                    <span className="switch-state">{checkIsON} </span>
                </div>
            </div>
        </>
    )


    // return (
    //     <>
    //         <div className="toggle-switch"
    //         style={{background: isOn? "#4caf50" : "#f44336"}}
    //             onClick={handleToggleSwitch}
    //         >
    //             <div className={`switch ${isOn ? "on" : "off"}`} >
    //                 <span className="switch-state">{isOn ? "on" : "off"} </span>
    //             </div>
    //         </div>
    //     </>
    // )
}