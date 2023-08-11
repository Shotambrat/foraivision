/* eslint-disable array-callback-return */
import React from 'react';
import { useSelector } from 'react-redux';
import './Styles/Photos.css'
import { fetchUserData } from '../../auth/auth';

export default function Photos () {
    const photos = useSelector(state => state.photos);
    const token = useSelector(state => state.token);
    const loadData = async () => {
        try {
            let response = await fetchUserData();
            console.log(response);
            console.log(response.data)
        } catch (error) {
            console.log(error, 'Oshibojka');
        }
    }
    // console.log(`State ${photos}`);
    // console.log(photos)
    // console.log([3, 43, 'dfdfj', 34])
    console.log(`token is ${token}`)
    console.log(token)
    return (
        <>
            <div className='photos-container'>
                <button onClick={loadData}>Photos</button>
                {photos.map((photo, index) => {
                    <div key={index}>
                        <img className='photo-box' src={URL.createObjectURL(photo)} alt={photo.name} />
                        {console.log(photo)}
                    </div>
                })}
                {console.log(photos.length)}
                
                Photos
            </div>
        </>
    )
}
