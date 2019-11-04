import React from 'react';
import { createUseStyles } from 'react-jss';
import { DiagonalSplitBackground } from '../../backgrounds/DiagonalSplitBackground';

const styles = createUseStyles({
    projects: {

    },
});

export const DevelopmentPage = () => {

    const classes = styles();
    
    return (
        <>
            <DiagonalSplitBackground />
        </>
    )
}