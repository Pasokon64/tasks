import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { MdSettings, MdExitToApp } from 'react-icons/md';

import CustomIcon from '../custom-icon';
import { user, disconnect } from '../../services/auth';

import './style.css';

function Profile() {
    const [logout, setLogout] = useState(false);

    function userLogout() {
        setLogout(true);
        disconnect();
    }

    if (logout)
        return <Redirect to="/login"/>    

    return (
        <div className="profile">
            <div className="user-info">
                <div>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            </div>
            <div className="user-options">
                <button>
                    <CustomIcon Icon={MdSettings}/>
                </button>
                <button onClick={userLogout}>
                    <CustomIcon Icon={MdExitToApp}/>
                </button>
            </div>
        </div>
    );
}

export default Profile;