import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../actions/action.js";
import axios from "axios";

export default function RegisterForm () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://oauth.yandex.ru/token", {
            grant_type: "password",
            username,
            password,
            client_id: "YOUR_CLIENT_ID",
            client_secret: "YOUR_CLIENT_SECRET",
            });
            dispatch(setToken(response.data.access_token));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
            Username:
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </label>
            <label>
            Password:
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </label>
            <button type="submit">Register</button>
        </form>
    );
};
