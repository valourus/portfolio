import React from 'react';
import {createUseStyles} from 'react-jss';

const styles = createUseStyles({
    kaas: {
        backgroundColor: 'red',
    } 
 });


 const Homepage  = () => {

    const classes = styles();

    return <h1 className={classes.kaas}>homepage</h1>

}

export default Homepage;