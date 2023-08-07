import React from 'react'

import './Cluster.css'

import corzinSrc from './logos/w448h5121380477116trash.png'
import albomSrc from './logos/1829379.png'
import fileSrc from './logos/file_89266.png'
import fotoSrc from './logos/picture.svg'

export default function Cluster() {
    return (
        <div className='cluster-container'>
            <div className='logo-box'>
                <div className='logo-box_hash'>
                    <img src={fileSrc} alt="SVG_LOGO" height={100} width={100} className='img'/>
                </div>
                Файлы
            </div>
            <div className='logo-box'>
                <div className='logo-box_hash'>
                    <img src={fotoSrc} alt="SVG_LOGO" height={100} width={100} className='img'/>
                </div>
                Фото
            </div>
            <div className='logo-box'>
                <div className='logo-box_hash'>
                    <img src={albomSrc} alt="SVG_LOGO" height={100} width={100} className='img'/>
                </div>
                Альбом
            </div>
            <div className='logo-box'>
                <div className='logo-box_hash'>
                    <img src={corzinSrc} alt="SVG_LOGO" height={100} width={100} className='img'/>
                </div>
                Корзина
            </div>
        </div>
    )
}
