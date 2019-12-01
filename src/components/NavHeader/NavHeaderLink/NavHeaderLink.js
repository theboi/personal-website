import React from 'react';

const NavHeaderLink = (props) => {
    const cont = props.cont
    return (
        <div>
            <h1>{cont.name}</h1>
        </div>
    );
}

export default NavHeaderLink;