import { useState } from "react";



function SignUpForm({URL}) {

    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        try {
            event.preventDefault();
            const response = await fetch(URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            }); 
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            console.log(json);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h2>Sign Up</h2> { error && <p>{error}</p> }
        <form onSubmit={handleSubmit}>
            <label>
                Username: <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
            </label>
            <label>
                Password: <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </label>
            <button>Submit</button>
        </form>
        </>
    );
}
export default SignUpForm