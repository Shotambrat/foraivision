import React from 'react'

import './Cluster.css'

import corzinSrc from './logos/w448h5121380477116trash.png'
import albomSrc from './logos/1829379.png'
import fileSrc from './logos/file_89266.png'
import fotoSrc from './logos/picture.svg'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Content from '../../Content/Content'

export default function Cluster() {
    return (
        <div className='cluster-container'>
            <Link to="/cluster/files">
                <div className='logo-box noselect'>
                    <div className='logo-box_hash'>
                        <img src={fileSrc} alt="SVG_LOGO" height={100} width={100} className='img'/>
                    </div>
                    Файлы
                </div>
            </Link>
            <Link to="/cluster/photo">
                <div className='logo-box noselect'>
                    <div className='logo-box_hash'>
                        <img src={fotoSrc} alt="SVG_LOGO" height={100} width={100} className='img'/>
                    </div>
                    Фото
                </div>
            </Link>
            <Link to="/cluster/albom">
                <div className='logo-box noselect'>
                    <div className='logo-box_hash'>
                        <img src={albomSrc} alt="SVG_LOGO" height={100} width={100} className='img'/>
                    </div>
                    Альбом
                </div>
            </Link>
            <Link to="/cluster/trash">
                <div className='logo-box noselect'>
                    <div className='logo-box_hash'>
                        <img src={corzinSrc} alt="SVG_LOGO" height={100} width={100} className='img'/>
                    </div>
                    Корзина
                </div>
            </Link>
                {/* <Route path="/cluster" component={Content} /> */}
        </div>
    )
}
