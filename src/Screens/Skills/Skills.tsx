import React from 'react';
import { VerticalSplitBackground } from '../../backgrounds/VerticalSplitBackground';
import { Theme } from '../../Utils/Theme';
import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
        marginLeft: '50%',
    },
    title: {
        marginTop: '25%',
        marginBottom: '2.5%',
        color: Theme.color.primary,
        fontSize: '5rem',
    },
    content: {
        color: 'white',
        width: '58%',
        lineHeight: '1.6rem',
        fontSize: '1.5rem',
        textAlign: 'center',
        letterSpacing: '0.7px',
    },
});

export const Skills = () => {
    const classes = styles();
    return (
        <>
            <VerticalSplitBackground colorRight={Theme.color.secondary} colorLeft={Theme.color.primary} />
            <div className={classes.container}>
                <h1 className={classes.title}>Skills</h1>
                <p className={classes.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices malesuada lacus, id mollis ante dapibus vitae. Duis vel neque malesuada, dictum erat eget, malesuada felis. Fusce lobortis ligula sit amet feugiat faucibus. Nullam sed tortor et ex faucibus viverra cursus vitae sapien. Nullam eu enim malesuada, volutpat libero nec, gravida dolor. Aliquam convallis pharetra lacus vehicula sagittis. Nam hendrerit blandit ex ac placerat. Nam quis fermentum odio, molestie egestas nulla. Nunc dictum hendrerit sagittis. </p>
            </div>
        </>
    )
}
