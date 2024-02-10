"use client"

import {Card, Grid, Text} from '@geist-ui/core';
import React from 'react';
import {MainCards} from "@/feature/mainPage/consts/mainPage.consts";
import Link from "next/link";

const MainPage = () => {
    return (
        <Grid.Container gap={1.5}>
            {MainCards.map(card => (
                <Grid xs={8} key={card.name}>
                    <Link href={card.link}>
                        <Card hoverable>
                            <Text h4 my={0} style={{textTransform: 'uppercase'}}>{card.name}</Text>
                            <Text>{card.subName}</Text>
                        </Card>
                    </Link>
                </Grid>
            ))}
        </Grid.Container>
    )
};

export default MainPage;