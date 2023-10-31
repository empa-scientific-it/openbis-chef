import React, { useState } from 'react';
import Popup from './Popup';
import { NotificationContext } from '../NotificationContext';
import { useNotification } from '../hooks/useNotification';

const PopupDemo = () => {

    const not = useNotification();

    const handleOpen = () => {
        console.log('Open');
        not.addNotification(`This is a success message from ${new Date()}`, 'success');
    }

    return (
        <>
        <NotificationContext.Provider value={not}>
        <button onClick={handleOpen}>Open Notification</button>
            <Popup timeout={2000}/>
        </NotificationContext.Provider>

        </>
    );
};

export default PopupDemo;
