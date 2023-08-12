import React, {useEffect, useState} from 'react'
import {store} from '../../store';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function Files() {
    const token = useSelector(state => state.token.token);
    const response = store.getState().token;
    console.log(`TOKEN ISSS ${response.token}`);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:7777/user/data';
        const headers = { 'Authorization': token, 'Content-Type': 'application/json' };
    
        axios.get(url, { headers })
            .then((response) => {
                setFiles(response.data._embedded.items);
            })
            .catch((error) => {
                console.log(error);
            });
        }, []);

    if (!files) {
        <h1>Здесь пока нет файлов</h1>
    }

    return (
        <div>
            {files && 
                <div>
                <ul>
                    {files.map((file) => (
                        <li key={file.path}>{file.name}</li>
                    ))}
                </ul>
            </div>
            }
        </div>
    );
}