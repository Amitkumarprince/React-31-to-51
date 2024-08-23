import { IoIosSwitch } from "react-icons/io";
import { PiUserSwitchThin } from "react-icons/pi";

export const Reacticon = () => {
    return (
        <>
            <h1 style={{ color: "#000", textAlign: "center" }}>
                Toggle Switch
                <br />
                <IoIosSwitch style={{ color: "red", textAlign: "center" }} />
                <PiUserSwitchThin style={{ color: "black", backgroundColor: "Blue", textAlign: "center" }} />
            </h1>
        </>
    )
}