// import "./Hooks.css" // css is missing

import { useState } from "react";

const ShortcircuitExample = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [user, setUser] = useState("");

    return (
        <section className="container short-container">
            {/* <h1>Welcome to the ShortCircuit Evaluation!</h1> */}
            <h1 style={{color: "black"}}>Welcome to the ShortCircuit Evaluation!</h1>

            {/* conditional rendering using short circuit evaluation */}
            {isLoggedIn && <p>you are logged in!</p>}

            {/* Another example of short circuit evaluations */}
            {user ? `Hello ${user}` : "Plz log in!"}

            <div className="gird-three-cols">
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
                <button onClick={() => setUser("Vinod Thapa")}>Set User</button>
                <button onClick={()=> setUser("")}>Clear User</button>
            </div>
        </section>
    )
}

export default ShortcircuitExample;