/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Styles/Photos.css'
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
    const token = useSelector(state => state.token.token);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:7777/user/data';
        const headers = { 'Authorization': token, 'Content-Type': 'application/json' };
    
        axios.get(url, { headers })
            .then((response) => {
                setUserData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    

    console.log(`TOKEN PHOTOJS IS ${token}`)

    if (!userData) {
        return <h1>Пока фото нет)))</h1>
    }

    return (
        <div>
            {userData &&
                < div className='for-content'>
                        {userData.map((photo, index) => (
                            <div key={index}>
                                {console.log(photo)}
                                <img className='photo-box' src={URL.createObjectURL(photo)} alt="Selected" />
                            </div>
                        ))}
                </div>
            }
        </div>
    )
}