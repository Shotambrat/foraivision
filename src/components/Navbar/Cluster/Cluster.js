import React from 'react'

import './Cluster.css'

import corzinSrc from './logos/w448h5121380477116trash.png'
import albomSrc from './logos/1829379.png'
import fileSrc from './logos/file_89266.png'
import fotoSrc from './logos/picture.svg'
import { Route, NavLink, Routes } from 'react-router-dom';
import Content from '../../Content/Content'

export default function Cluster() {
    return (
        <div className='cluster-container'>
            <NavLink to="/cluster/files">
                <div className='logo-box noselect'>
                    <div className='logo-box_hash'>
                        <img src={fileSrc} alt="SVG_LOGO" height={100} width={100} className='img'/>
                    </div>
                    <b>Файлы</b>
                </div>
            </NavLink>
            <NavLink to="/cluster/photo">
                <div className='logo-box noselect'>
                    <div className='logo-box_hash'>
                        <img src={fotoSrc} alt="SVG_LOGO" height={100} width={100} className='img'/>
                    </div>
                    <b>Фото</b>
                </div>
            </NavLink>
            <NavLink to="/cluster/albom">
                <div className='logo-box noselect'>
                    <div className='logo-box_hash'>
                        <img src={albomSrc} alt="SVG_LOGO" height={100} width={100} className='img'/>
                    </div>
                    <b>Альбом</b>
                </div>
            </NavLink>
            <NavLink to="/cluster/trash"> 
                <div className='logo-box noselect'>
                    <div className='logo-box_hash'>
                        <img src={corzinSrc} alt="SVG_LOGO" height={100} width={100} className='img'/>
                    </div>
                    <b>Корзина</b>
                </div>
            </NavLink>
        </div>
    )
}
