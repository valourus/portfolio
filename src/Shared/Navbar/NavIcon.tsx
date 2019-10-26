import React, { FunctionComponent, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

interface NavIconProps {
    iconName: string;
    pageName: string;
}

const styles = createUseStyles({});

export const NavIcon: FunctionComponent<NavIconProps> = ({ iconName, pageName }: NavIconProps) => {
    return (
        <>
            <NavLink activeClassName="selectedLink"  to={pageName} exact>
                <img src={`/public/icons/${iconName}.svg`} />
            </NavLink>
        </>
    );
}