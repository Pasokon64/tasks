import React from 'react';
import { IconContext } from 'react-icons';
import { MdSettings, MdExitToApp } from 'react-icons/md';

import './style.css';

function Icon({ IconName }) {
    return (
        <IconContext.Provider value={{ color: "#444", size: "2em", className: "global-class-name" }}>
            <IconName/>
        </IconContext.Provider>
    );
}

function Profile() {
    return (
        <div className="profile">
            <div className="user-info">
                <img src={"https://avatars3.githubusercontent.com/u/40151593?v=4"} />
                <div>
                    <h3>Nome do usuário</h3>
                    <p>Email do usuário</p>
                </div>
            </div>
            <div className="user-options">
                <button>
                    <Icon IconName={MdSettings}/>
                </button>
                <button>
                    <Icon IconName={MdExitToApp}/>
                </button>
            </div>
        </div>
    );
}

export default Profile;