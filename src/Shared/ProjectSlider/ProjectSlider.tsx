import React, { useState } from 'react';
import { Project } from '../../Schema/Project';
import { createUseStyles } from 'react-jss';
import { ProjectBox } from './ProjectBox';

const styles = createUseStyles({

    projectContainer: {
        width: '120%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: '100px',
    }
});

interface ProjectSliderProps {
    projects: Project[]
}

export const ProjectSlider = ({ projects }: ProjectSliderProps) => {
    const classes = styles();
    const [currIndex, setIndex] = useState(0);

    const projectsToShow = projects.filter((project, index) => index == currIndex || index > currIndex && index <= currIndex + 2);

    let length = projectsToShow.length;
    if (length < 3) {
        for (let i = 0; i < 3 - length; i++) {
            projectsToShow.push(projects[i]);
        }
    }
    return (
        <div className={classes.projectContainer}>
            <div>&lt;</div>
            <div className={classes.projectContainer}>
                {
                    projectsToShow.map(project => <ProjectBox key={project.name} name={project.name} photo={project.photo} />)
                }
            </div>
            <div>&gt;</div>
        </div>
    )
}