import { useState } from "react";
import '../styles/Login.css';

const Login = () => {
	// state/context variables
	const [id, setId] = useState("");
	const [error, setError] = useState("");

	// event handler set state using user input field data 
	const handleChange = (e) => {
		setId(e.target.value);
	};

	// event handler to request API when form is submitted 
	const handleSubmit = async (e) => {
		e.preventDefault();
		// fetch the API request 
		try {
			const response = await fetch(`http://localhost:5000/api/login`,{ 
                method: 'POST',
                 headers: { 'Content-Type': 'application/json '},
                  body: JSON.stringify({ id: id }) })

            const data = await response.json();
			
			// redirect user to landing page 
			if(response.status === 200){
                localStorage.setItem("user", JSON.stringify(data.data.user))
                window.location = "/";
            }
            

            if (response.status === 400) {
				setError(data.message);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className = "login-container">{/* Each of these buttons link to the way the user will see the application. */}
                {/* For each User, they will be prompted to enter ID, if that ID matches, they will be able to log in */}
            <div className = "App">  
            <h1 className = "header"> Course Outline Manager</h1>
                <form className = "login-form" onSubmit={handleSubmit}>
                    <input type = "text" placeholder='Enter ID...' value={id} required onChange={handleChange}></input>
                   <button type='submit' className="login-button">Log In</button>   
                </form>
                {error && <div className="error_msg">{error}</div>}
            </div>
            </div>
	);
};

export default Login;
