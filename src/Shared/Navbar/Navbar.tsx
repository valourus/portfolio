import React, { FunctionComponent } from 'react';
import {createUseStyles} from 'react-jss';

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
        height: '40vh',
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
                <div>icon</div>
                <div>icon</div>
                <div>icon</div>
                <div>icon</div>
                <div>icon</div>
                <div>icon</div>
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