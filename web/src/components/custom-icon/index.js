import React from 'react';
import { IconContext } from 'react-icons';

function CustomIcon({ Icon }) {
    return (
        <IconContext.Provider value={{ color: "#444", size: "2em", className: "global-class-name" }}>
            <Icon/>
        </IconContext.Provider>
    );
}

export default CustomIcon;