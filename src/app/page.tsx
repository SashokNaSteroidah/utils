"use client"

import {Card, Grid, Text} from '@geist-ui/core';
import React from 'react';
import {MainCards} from "@/feature/mainPage/consts/mainPage.consts";
import Link from "next/link";
import Center from "@/components/center/Center";

const MainPage = () => {
    return (
        <Center>
            <Grid.Container gap={10}>
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
        </Center>
    )
};

export default MainPage;