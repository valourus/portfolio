import React, { FunctionComponent } from 'react';
import { createUseStyles } from 'react-jss';
import { NavIcon } from './NavIcon';

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
    }
});

export const Navbar: FunctionComponent = () => {
    
    const classes = styles();

    return (
        <div className={classes.navbar}>
            <div className={classes.titleContainer}>
                <h2 className={classes.title}>Hoi</h2>
                <h2 className={classes.title}>Kei</h2>
            </div>
            <div className={classes.iconContainer}>
                <NavIcon iconName="home" pageName="/" />
                <NavIcon iconName="person" pageName="contact" />
                <NavIcon iconName="programming" pageName="game-dev" />
                <NavIcon iconName="pencil" pageName="/art" />
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