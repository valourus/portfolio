import React, { FunctionComponent, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { NavLink } from 'react-router-dom';
import { HomeIcon, PersonIcon, CodeIcon, PencilIcon } from '../Icons/index';

const styles = createUseStyles({

    navbar: {
        backgroundColor: 'black',
        height: '100vh',
        width: '60px',
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
                    <HomeIcon  color={currPage == '/' ? 'red' : '#80828a'} />
                </NavLink>

                <NavLink to="/about-me" exact onClick={() => setCurrPage('/about-me')}>
                    <PersonIcon color={currPage == '/about-me' ? 'red' : '#80828a'} />
                </NavLink>

                <NavLink to="/game-dev" exact onClick={() => setCurrPage('/game-dev')}>
                    <CodeIcon color={currPage == '/game-dev' ? 'red' : '#80828a'} />
                </NavLink>

                <NavLink to="/art" exact onClick={() => setCurrPage('/art')}>
                    <PencilIcon color={currPage == '/art' ? 'red' : '#80828a'} />
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