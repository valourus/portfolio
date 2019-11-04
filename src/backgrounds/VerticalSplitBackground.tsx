import React from 'react';
import { createUseStyles } from 'react-jss';
import { Theme } from '../Utils/Theme';

const styles = createUseStyles({
    container: {
        display: 'flex',
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        marginLeft: Theme.constants.navBarWidth,
    },
    side: {
        width: '50vw',
    },
});

interface VerticalSplitBackgroundProps {
    colorLeft: string;
    colorRight: string;
}

export const VerticalSplitBackground = ({ colorLeft, colorRight }: VerticalSplitBackgroundProps) => {
    const classes = styles();
    return (
        <div className={classes.container}>
            <div className={classes.side} style={{ backgroundColor: colorLeft }}></div>
            <div className={classes.side} style={{ backgroundColor: colorRight }}></div>
        </div>
    );

}