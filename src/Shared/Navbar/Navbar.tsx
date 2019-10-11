import React, { FunctionComponent } from 'react';
import {createUseStyles} from 'react-jss';

const styles = createUseStyles({

    navbar: {
        backgroundColor: 'black',
        height: '100vh',
        width: '50px'
    }

});

export const Navbar: FunctionComponent = () => {
    
    const classes = styles();

    return (
        <div className={classes.navbar}>
            navbar
        </div>
    )
}