import React from 'react';
import { createUseStyles } from 'react-jss';
import { HorizontalSplitBackground } from '../../backgrounds/HorizontalSplitBackground';
import { Theme } from '../../Utils/Theme';

const styles = createUseStyles({
    container: {
        paddingLeft: Theme.constants.navBarWidth,
        display: 'flex',
        width: '100%',
    },
    nameContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100.5vh',
    },
    hoiTitle: {
        fontSize: '6rem',
        color: Theme.color.primary,
    },
    keiTitle: {
        fontSize: '6rem',
        color: Theme.color.secondary,
        fontFamily: Theme.font.art,
        display: 'flex',
        width: '100%',
        justifyContent: 'center',

    },
    aboutmeContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3rem',
        marginLeft: '16%',
    },
    gameDevText: {
        color: Theme.color.primary,
    },
    gameArtistText: {
        color: Theme.color.secondary,
        fontFamily: Theme.font.art,
    }
});


const Homepage = () => {

    const classes = styles();

    return (
        <>
            <HorizontalSplitBackground />
            <section className={classes.container}>
                <div className={classes.nameContainer}>
                    <div className={classes.hoiTitle}>hoi</div>
                    <div className={classes.keiTitle}>kei</div>
                </div>

                <div className={classes.aboutmeContainer}>
                    <div className={classes.gameDevText}>GAME DEVELOPER</div>
                    <div style={{color:'white'}}>&</div>
                    <div className={classes.gameArtistText}>Freelance Artist</div>
                </div>
            </section>
        </>
    )

}

export default Homepage;