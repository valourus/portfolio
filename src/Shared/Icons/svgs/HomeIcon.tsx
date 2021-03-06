import React from "react";
import { IconProps } from "../IconProps";

export const HomeIcon = (props: IconProps): JSX.Element => (
    <svg { ...props }xmlns="http://www.w3.org/2000/svg" width="28.329" height="30.101" viewBox="0 0 28.329 30.101">
        <path id="HomeButton" d="M130.4-1405.649l-11.183-10.064a3.067,3.067,0,0,0-4.1,0l-11.183,10.064a2.767,2.767,0,0,0-.931,2.057v14.361a2.911,2.911,0,0,0,2.983,2.833h7.64a.707.707,0,0,0,.708-.708v-9.915a.709.709,0,0,1,.708-.708h4.249a.708.708,0,0,1,.708.708v9.915a.708.708,0,0,0,.708.708h7.642a2.909,2.909,0,0,0,2.982-2.833v-14.361a2.767,2.767,0,0,0-.931-2.057" transform="translate(-103 1416.5)" fill={props.color} fillRule="evenodd" />
    </svg>
);