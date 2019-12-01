import React from 'react';
import {Link} from 'react-router-dom';

const NavHeaderLink = (props) => {
    const cont = props.cont
    return (
        <div>
            <li><Link to={cont.link}>{cont.name}</Link></li>
        </div>
    );
}

export default NavHeaderLink;