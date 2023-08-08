import React, { useState, useEffect } from 'react'

import './Content.css';

export default function Content () {

    const [selectedFile, setSelectedFile] = useState()

    useEffect(() => {
        const fileInput = document.querySelector('.fileInput');
        fileInput.addEventListener('change', () => {
            setSelectedFile(fileInput.files);
            if (selectedFile.length > 100) {
                    alert('Выбрано слишком много файлов. Максимальное количество: 100');
                    fileInput.value = '';
                } else if (selectedFile.length < 1) {
                    alert('Выберите хотя бы один файл');
                    fileInput.value = '';
                } else {
                // Обработка выбранных файлов
                }
        })
    }, [])
    console.log(selectedFile)
    return (
        <div className='content-container'>
            <div className='create-container'>
                <button className='new-folder createButton'><svg className='plus-icon' xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg><b>New Folder</b></button>
                <button className='upload createButton'><svg height={20} widths={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor"><path d="M19,13a1,1,0,0,0-1,1v.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.7L9.41,11.12a2.85,2.85,0,0,0-3.93,0L4,12.6V7A1,1,0,0,1,5,6h7a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V14A1,1,0,0,0,19,13ZM5,20a1,1,0,0,1-1-1V15.43l2.9-2.9a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15.46,20Zm13-1a.89.89,0,0,1-.18.53L13.31,15l.7-.7a.77.77,0,0,1,1.1,0L18,17.21ZM22.71,4.29l-3-3a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42L18,4.41V10a1,1,0,0,0,2,0V4.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,22.71,4.29Z" id="mainIconPathAttribute"></path></svg><b>Upload</b></button>
            </div>
            <div className='data-container'>
                <input type="file" className='fileInput' multiple/>
                {/* {selectedFile.map((file) => {
                    <div height={100} width={100}>{file}</div>
                })} */}
            </div>
        </div>
    )
}