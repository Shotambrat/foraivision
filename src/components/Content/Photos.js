/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Styles/Photos.css'
import { setPhoto } from '../../actions/action'
import axios from 'axios';
// import { fetchUserData } from '../../auth/auth';

export default function Photos () {
    // const photos = useSelector(state => state.photos);
    // const loadData = async () => {
    //     try {
    //         let response = await fetchUserData();
    //         console.log(response)
    //         console.log(response.request);
    //         console.log(response.data);
    //         return response;
    //     } catch (error) {
    //         console.log(error, 'Oshibojka');
    //     }
    // }
    // // console.log(`State ${photos}`);
    // // console.log(photos)
    // // console.log([3, 43, 'dfdfj', 34])
    // console.log(`token is ${token}`)
    // console.log(token)
    // <button onClick={loadData}>Photos</button>
    // {photos.map((photo, index) => {
    //     <div key={index}>
    //         <img className='photo-box' src={URL.createObjectURL(photo)} alt={photo.name} />
    //         {console.log(photo)}
    //     </div>
    // })}
    // {console.log(photos.length)}
    
    // Photos
    // const dispatch = useDispatch();
    const [user, setUser] = useState('')
    const token = useSelector(state => state.token.token);
    console.log(`TOKEN PHOTOJS IS ${token}`)

    useEffect(() => {
        axios
        .get('http://localhost:7777/user', {
            headers: {
                'Authorization': token,
            },
        })
        .then((response) => {
            console.log(response);
            setUser(response)
        })
        .catch((error) => {
            console.log(error, 'zdes oshibka');
        });
    }, [])

    console.log(`user iz State ${user}`)

    return (
        <div>
            <div className='photos-container'>
                fototto
            </div>
        </div>
    )
}
