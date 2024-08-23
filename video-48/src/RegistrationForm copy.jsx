import "./index.css";

const RegistrationForm = () => {
    return (
        <>
            <form>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>

                    <label htmlFor="firstName">
                        <b>First Name</b>
                    </label>
                    <input type="text"
                        name="firstName"
                        placeholder="Enter firstName"
                        required
                    />

                    <label htmlFor="lastName">
                        <b>Last Name</b>
                    </label>
                    <input type="text"
                        name="LastName"
                        placeholder="Enter lastName"
                        required
                    />

                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input type="text"
                        placeholder="Enter Email"
                        name="email"
                        required
                    />

                    <label htmlFor="password">
                        <b>password</b>
                    </label>
                    <input 
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    />

                    <label htmlFor="phone">
                        <b>phone Number</b>
                    </label>
                    <input type="phone" name="phone" placeholder="9525308611" required />

                    <p>By creating an account you agree to out 
                        <a href="#" style={{color: "dodgerblue"}}  >
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
        </>
    )
}

export default RegistrationForm;