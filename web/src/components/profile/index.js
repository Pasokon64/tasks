import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { MdSettings, MdExitToApp } from 'react-icons/md';

import { user, disconnect } from '../../services/auth';

import './style.css';

function Icon({ IconName }) {
    return (
        <IconContext.Provider value={{ color: "#444", size: "2em", className: "global-class-name" }}>
            <IconName/>
        </IconContext.Provider>
    );
}

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
                    <Icon IconName={MdSettings}/>
                </button>
                <button onClick={userLogout}>
                    <Icon IconName={MdExitToApp}/>
                </button>
            </div>
        </div>
    );
}

export default Profile;