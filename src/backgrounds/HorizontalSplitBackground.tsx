import React, { FunctionComponent, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { Theme } from '../Utils/Theme';

const styles = createUseStyles({
    container: {
        // TODO: do some calc with the navbar width
        width: '100%',
        height: '100vh',
        display: 'inline-block',
        position: 'absolute',
        zIndex: '-1',
    },

    section: {
        height: '50%',
    },

    top: {
        backgroundColor: Theme.color.secondary,
    },

    bottom: {
        backgroundColor: Theme.color.primary,
    }
});

export const HorizontalSplitBackground: FunctionComponent = () => {

    const classes = styles();

    return (
        <div className={classes.container}>
            <div className={`${classes.section}  ${classes.top}`}></div>
            <div  className={`${classes.section}  ${classes.bottom}`}></div>
        </div>
    )
}