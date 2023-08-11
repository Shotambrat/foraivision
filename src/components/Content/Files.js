import React from 'react'
import {store} from '../../store';

export default function Files() {
    const response = store.getState().token;
    console.log(`TOKEN ISSS ${response.token}`);
    console.log(response.token)

    return (
        <div>Files</div>
    )
}
