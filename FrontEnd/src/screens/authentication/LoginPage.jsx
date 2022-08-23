import React, { useState,} from "react";
import Spinner from 'react-bootstrap/Spinner';

export default function LoginPage(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const userLogin = async (e) => {
        e.preventDefault();

        if(username === "") {
            return alert("Please fill the user name");
        }
        if(password === "") {
            return alert("Please fill the password");
        }

        setLoading(true);
        if (loading) return;

        fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username, password: password}),
            mode: "cors"
        }).then((res) => {
            alert("Login success");
        }).catch((err) => {
            alert("Login error");
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <div>
            <div className="login-panel">
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" onChange={handleUsernameChange} value={username} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={handlePassword} value={password} />
                    </div>
                    <div className="form-group">
                        <button onClick={userLogin}>{loading ?  <Spinner animation="border" role="status"/> : "Login"}</button>  
                    </div>
                </form>
            </div>
        </div>
    );
}