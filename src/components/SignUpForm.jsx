import { useState } from "react";

function SignUpForm({URL_SIGNUP, token, setToken}) {

    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        try {
            event.preventDefault();
            if(username.length < 8){
                setError("Username must be at least eight characters in length");
            } else if (password.length < 8) {
                setError("Password must be at least eight characters in length");
            } else {
                const response = await fetch(URL_SIGNUP, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, password }),
                }); 
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const json = await response.json();
                setToken(json.token);
                setSuccessMessage(json.message);
                setError(null);
            }
        } catch (e) {
            console.error(e);
            setError(e.message);
        }
    }
    
    return (
        <>
        <div className="signUpArea">
            <h2>Sign Up</h2> 
            { error && <p className="warning-message">{error}</p> }
            {successMessage && <p className="success-message">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} required />
                </label>
                <label>
                    Password: <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                </label>
                <button>Submit</button>
            </form>
        </div>
        </>
    );
}
export default SignUpForm