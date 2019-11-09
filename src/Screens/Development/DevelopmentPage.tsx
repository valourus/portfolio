import React from 'react';
import { createUseStyles } from 'react-jss';
import { DiagonalSplitBackground } from '../../backgrounds/DiagonalSplitBackground';
import { ProjectSlider } from '../../Shared/ProjectSlider/index';
import { Theme } from '../../Utils/Theme';

const styles = createUseStyles({
    container: {
        transform: `Rotate(${-27.3 }deg)`,
        margin: `14% 0 0 14%`,
        width: '50%',
        height: '300px',

        // '@media (max-width: 1024px)': {
        //     container: {
        //         transform: 'Rotate(-23.3deg)',
        //     }
        //   }
    },
    title: {
        fontSize: '67px',
        textAlign: 'center',
        width: '115%',
        margin: '20px',
        color: Theme.color.primary,
    },
    development: {
        zIndex: 1,
        marginTop: '40%',
        // width: '100%',
        // height: '100%',
        // display: 'flex',
        // justifyContent: 'flex-end',
        // flexDirection: 'column',
        // alignContent: 'flex-end',
    },
    content: {
        // width: '25%',
    }
});

export const DevelopmentPage = () => {

    const classes = styles();

    return (
        <>
            <DiagonalSplitBackground />

            <section className={classes.container}>
                <h1 className={classes.title}>Projects</h1>
                <ProjectSlider projects={[
                    {
                        name: 'test',
                        description: 'test description',
                        photo: 'https://picsum.photos/200/200'
                    },
                    {
                        name: 'test',
                        description: 'test description',
                        photo: 'https://picsum.photos/200/200'
                    },
                    {
                        name: 'test',
                        description: 'test description',
                        photo: 'https://picsum.photos/200/200'
                    },
                    {
                        name: 'test',
                        description: 'test description',
                        photo: 'https://picsum.photos/200/200'
                    }
                ]} />
            </section>

            <section className={classes.development}>
                <div className={classes.content}>
                    <h1>DEVELOPMENT</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mi enim. Cras sed ex vitae nisl maximus bibendum et eget lorem. Vivamus convallis sit amet diam ut bibendum. Morbi egestas eros sed neque blandit sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin dapibus viverra justo non rutrum. Proin ornare in eros quis feugiat. Donec vel turpis nulla. Maecenas ultricies porta massa, vel pretium sem. </p>
                </div>
            </section>
        </>
    )
}