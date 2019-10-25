import React from 'react';
import { createUseStyles } from 'react-jss';
import { HorizontalSplitLayout } from '../../Layouts/HorizontalSplitLayout';

const styles = createUseStyles({

    topContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end'
    },
    bottomContainer: {

    }
});


const Homepage = () => {

    const classes = styles();

    return (
        <div>
            <HorizontalSplitLayout />
            <h1>hoikei</h1>
        </div>
    )

}

export default Homepage;