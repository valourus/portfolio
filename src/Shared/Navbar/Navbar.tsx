import React, { FunctionComponent, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { NavLink } from 'react-router-dom';
import { HomeIcon, PersonIcon, CodeIcon, PencilIcon, SettingsIcon } from '../Icons/index';
import { Theme } from '../../Utils/Theme';

const styles = createUseStyles({

    navbar: {
        padding: '10px 0',
        backgroundColor: '#191B1D',
        height: '100vh',
        width: Theme.constants.navBarWidth,
        minWidth: Theme.constants.navBarWidth,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },

    title: {
        margin: 0,
    },

    titleContainer: {
        marginBottom: '15vh',
    },

    iconContainer: {
        height: '30vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: '25vh'
    },
    active: {
        fill: 'red !important',
    }
});

export const Navbar: FunctionComponent = () => {

    const classes = styles();
    const [currPage, setCurrPage] = useState(window.location.pathname);

    return (
        <div className={classes.navbar}>
            <div className={classes.titleContainer}>
                <h2 className={classes.title}>Hoi</h2>
                <h2 className={classes.title}>Kei</h2>
            </div>
            <div className={classes.iconContainer}>
                <NavLink to="/" exact onClick={() => setCurrPage('/')}>
                    <HomeIcon  color={currPage == '/' ? Theme.color.primary : '#80828a'} />
                </NavLink>

                <NavLink to="/about-me" exact onClick={() => setCurrPage('/about-me')}>
                    <PersonIcon color={currPage == '/about-me' ? Theme.color.primary : '#80828a'} />
                </NavLink>

                <NavLink to="/skills" exact onClick={() => setCurrPage('/skills')}>
                    <SettingsIcon color={currPage == '/skills' ? Theme.color.primary : '#80828a'} />
                </NavLink>
                
                <NavLink to="/game-dev" exact onClick={() => setCurrPage('/game-dev')}>
                    <CodeIcon color={currPage == '/game-dev' ? Theme.color.primary : '#80828a'} />
                </NavLink>

                <NavLink to="/art" exact onClick={() => setCurrPage('/art')}>
                    <PencilIcon color={currPage == '/art' ? Theme.color.primary : '#80828a'} />
                </NavLink>
            </div>
            <div>
                <div>icon</div>
                <div>icon</div>
                <div>icon</div>
                <div>icon</div>
            </div>
        </div>
    )
}