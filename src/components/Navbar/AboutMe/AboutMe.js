import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import './AboutMe.css'

import AvaSrc from './6386976.png'

export default function Aboutme() {
    const token = useSelector(state => state.token.token);
    const [user, setUser] = useState('');

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    useEffect(() => {
        axios
        .get('http://localhost:7777/user', {
            headers: {
                'Authorization': token,
            },
        })
        .then((response) => {
            console.log(response);
            setUser(response);
        })
        .catch((error) => {
            console.log(error, 'zdes oshibka');
        });
    }, [])

    return (
        <Button variant="outlined" onClick={handleClickOpen} className='ava-box'>
            <img src={AvaSrc} alt="SVG_LOGO" height={100} width={100} className='ava-img'/>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"ABOUT USER"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Your login: {user.login}.
                    Fullname: {user.real_name}.
                    YourPhone: {user.default_phone.number}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose}>Agree</Button>
                </DialogActions>
            </Dialog>
        </Button>
    )
}

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });
