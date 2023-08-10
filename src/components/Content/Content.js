import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import { addPhotos, addFiles } from '../../actions/action';

import { Routes, Route } from 'react-router-dom';

import './Styles/Content.css';

import Photos from './Photos';
import Files from './Files';
import Albom from './Albom'
import Trash from './Trash'

export default function Content () {

    const [files, setFiles] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const handleFileChange = (event) => {
        const newFiles = [...event.target.files];

        if (newFiles.length > 100) {
            alert('Выбрано слишком много файлов. Максимальное количество: 100');
            newFiles.value = [];
        } else if (newFiles.length < 1) {
            alert('Выберите хотя бы один файл');
            newFiles.value = [];
        } else {
            const newPhotos = newFiles.filter((file) => file.type.startsWith('image/'));
            const newOtherFiles = newFiles.filter((file) => !file.type.startsWith('image/'));
        
            setFiles([...files, ...newOtherFiles]);
            setPhotos([...photos, ...newPhotos]);
        }
    
        if (newFiles.length > 0) {
            setShowModal(true);
        }
    };
    
    const handleSubmit = () => {
        dispatch(addPhotos(photos));
        dispatch(addFiles(files));
        setShowModal(false);
        setPhotos([])
        setFiles([])
    };

    return (
        <div className='content-container'>
            <div className='create-container'>
                <button className='new-folder createButton'><svg className='plus-icon' xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg><b>New Folder</b></button>
                <button className='upload createButton'><svg height={20} widths={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor"><path d="M19,13a1,1,0,0,0-1,1v.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.7L9.41,11.12a2.85,2.85,0,0,0-3.93,0L4,12.6V7A1,1,0,0,1,5,6h7a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V14A1,1,0,0,0,19,13ZM5,20a1,1,0,0,1-1-1V15.43l2.9-2.9a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15.46,20Zm13-1a.89.89,0,0,1-.18.53L13.31,15l.7-.7a.77.77,0,0,1,1.1,0L18,17.21ZM22.71,4.29l-3-3a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42L18,4.41V10a1,1,0,0,0,2,0V4.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,22.71,4.29Z" id="mainIconPathAttribute"></path></svg><b>Upload</b><input type="file" onChange={handleFileChange} multiple accept="image/*" /></button>
            </div>
            <div className='data-container'>
                <div className='img-container'>
                <Photos />
                <Routes>
                    <Route path="/cluster/files" element={<Files />} /> 
                    <Route path="/cluster/albom" element={<Albom />} /> 
                    <Route path="/cluster/trash" element={<Trash />} /> 
                </Routes>
                </div>                                                          
            </div>
            {showModal && (
                        <div className='modal__wrapper'>
                            <div className='modal__container'>
                                <button className="close-button" onClick={() => {
                                    setShowModal(false)
                                    setFiles([])
                                    setPhotos([])
                                }}>
                                    X
                                </button>
                                <div className='for-text'>
                                    <h2>Selected files and photos:</h2>
                                </div>
                                <div className='for-content'>
                                    {files.map((file, index) => (
                                        <div className='file-box' key={index}>{file.name}</div>
                                    ))}

                                    {photos.map((photo, index) => (
                                        <div key={index}>
                                            {console.log(photo)}
                                            <img className='photo-box' src={URL.createObjectURL(photo)} alt="Selected" />
                                        </div>
                                    ))}
                                </div>
                                <button className='submit-button' onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                )}
        </div>
    )
}