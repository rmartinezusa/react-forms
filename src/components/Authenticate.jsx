import { useState } from 'react'

function Authenticate({URL_AUTHENTICATE, token, setToken}) {
    
    const [successMessage, setSuccessMessage] = useState(null);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    async function handleClick() {
        try {
            const response = await fetch(URL_AUTHENTICATE, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                }   
            });
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();

            if (json.success) {
                setUser(json.data.username);
                setSuccessMessage(json.message);
                setError(null);
            } else {
                setError(`${json.name}: ${json.message}`);
            }
        } catch (e) {
            console.error(e);
            setError(e.message);
        }
    }

    return(
        <>
            <div className="authenticateArea">
                <h2>Authenticate</h2>
                {successMessage && <p className="success-message">{successMessage}</p>}
                {user && <p className="username">Welcome Username: {user}</p>}
                {error && <p className="error-message">{error}</p>}
                <button onClick={handleClick}>Authenticate Token</button>
            </div>
        </>
    );
}
export default Authenticate