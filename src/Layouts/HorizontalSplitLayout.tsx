import React, { FunctionComponent, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
    container: {
        // TODO: do some calc with the navbar width
        width: '96.9%',
        height: '100vh',
        display: 'inline-block',
        position: 'absolute',
    },

    section: {
        height: '50%',
    },

    top: {
        backgroundColor: 'grey',
    },

    bottom: {
        backgroundColor: 'red',
    }
});

export const HorizontalSplitLayout: FunctionComponent = () => {

    const classes = styles();

    return (
        <div className={classes.container}>
            <div className={`${classes.section}  ${classes.top}`}></div>
            <div  className={`${classes.section}  ${classes.bottom}`}></div>
        </div>
    )
}