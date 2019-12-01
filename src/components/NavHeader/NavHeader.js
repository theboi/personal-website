import React from 'react';

import NavHeaderLink from './NavHeaderLink/NavHeaderLink';
import content from '../../assets/content/content';

const NavHeader = () => {
    return (
        <div>
            <nav>
                <ul>
                    {content.NavLinks.map(cont => {
                        return <NavHeaderLink cont={cont} key={cont.name} />
                    })}
                </ul>
            </nav>
        </div>
    );
}

export default NavHeader;