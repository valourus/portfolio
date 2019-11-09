import React, { FunctionComponent } from 'react';
import { createUseStyles } from 'react-jss';
import { Theme } from '../Utils/Theme';

const styles = createUseStyles({
    top: {
        width: '97vw',
        height: '100vh',
        clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)',
        position: 'absolute',
        backgroundColor: Theme.color.primary,
    },

    bottom: {

        width: '100vw',
        height: '100vh',
        position: 'absolute',
        backgroundColor: Theme.color.secondary,
        zIndex: -1,
    }
});

export const DiagonalSplitBackground: FunctionComponent = () => {

    const classes = styles();

    return (
        <div>
            <div className={classes.top}></div>
            <div  className={classes.bottom}></div>
        </div>
    )
}