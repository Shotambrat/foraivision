/* eslint-disable array-callback-return */
import React from 'react'
import { useSelector } from 'react-redux'
import './Styles/Photos.css'

export default function Photos () {
    const photos = useSelector(state => state.photos);

    console.log(`State ${photos}`);
    console.log(photos)
    
    return (
        <div className='photos-container'>
            Photos
            {photos.map((photo, index) => {
                <div key={index}>
                    <img className='photo-box' src={URL.createObjectURL(photo)} alt={photo.name} />
                </div>
            })}
            {console.log(photos.length)}
            Photos
        </div>
    )
}
