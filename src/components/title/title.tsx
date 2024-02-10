"use client"

import React from 'react';
import {Text} from '@geist-ui/core'
import classes from './title.module.sass'

const Title = (): React.ReactNode => {
    return (
        <>
            <Text className={classes.text} h1>
                Генератор
            </Text>
        </>
    );
};

export default Title;