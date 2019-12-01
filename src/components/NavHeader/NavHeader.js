import React from 'react';

import NavHeaderLink from './NavHeaderLink/NavHeaderLink';
import content from '../../assets/content/content';

const NavHeader = () => {
    return (
        <div>
            {content.NavLinks.map(cont => {
                return <NavHeaderLink cont={cont}/>
            })}
        </div>
    );
}

export default NavHeader;