import { useState } from "react";
import "./index.css";

export const RegistrationFormA = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "firstName":
                setFirstName(value)
                break;

            case "lastName":
                setLastName(value)
                break;

            case "email":
                setEmail(value)
                break;

            case "password":
                setPassword(value)
                break;

            case "phone":
                setPhoneNumber(value)
                break;

        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = {
            firstName, lastName, email, password, phoneNumber
        }
        console.log(formData)
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="container"
                style={{marginTop: "150px" }}
                >
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>

                    <label htmlFor="firstName">
                        <b>First Name</b>
                    </label>
                    <input type="text"
                        name="firstName"
                        placeholder="Enter firstName"
                        required
                        value={firstName}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="lastName">
                        <b>Last Name</b>
                    </label>
                    <input type="text"
                        name="lastName"
                        placeholder="Enter lastName"
                        required
                        value={lastName}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input type="text"
                        placeholder="Enter Email"
                        name="email"
                        required
                        value={email}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="password">
                        <b>password</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        required
                        value={password}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="phone">
                        <b>phone Number</b>
                    </label>
                    <input
                        type="phone"
                        name="phone"
                        placeholder="9525308611"
                        required
                        value={phoneNumber}
                        onChange={handleInputChange}
                    />

                    <p>By creating an account you agree to out
                        <a href="#" style={{ color: "dodgerblue" }}  >
                            Terms & privacy
                        </a>
                    </p>

                    <div className="clearfix">
                        <button type="submit" className="btn">
                            Sign Up
                        </button>
                    </div>

                </div>
            </form>

            <section
                className="summary"
                style={{ textAlign: "center", marginTop: "30px" }}
            >
                <p>
                    Hello, my name is
                    <span>
                        {firstName} {lastName}
                    </span>
                    . My email adress is <span>{email} </span> and my phoner number is
                    <span>{phoneNumber} </span>
                </p>

            </section>
        </>
    )
}

