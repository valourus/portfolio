import React from 'react';
import { createUseStyles } from 'react-jss';

interface ProjectBoxProps {
    name: string;
    photo: string;
}

const styles = createUseStyles({
    box: {
        width: '200px',
        height: '200px',
    }
});

export const ProjectBox = ({name, photo}: ProjectBoxProps) => {
    const classes = styles();
    return (
        <div className={classes.box} style={{background: `url(${photo})`}}></div>)
}