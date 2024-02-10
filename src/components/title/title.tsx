"use client"

import React from 'react';
import {Text} from '@geist-ui/core'
import classes from './title.module.sass'

interface ITitle {
    text: string
}

const Title = ({text}: ITitle): React.ReactNode => {
    return (
        <>
            <Text className={classes.text} h1>
                {text}
            </Text>
        </>
    );
};

export default Title;