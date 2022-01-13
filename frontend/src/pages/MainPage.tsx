import React from 'react';
import Header from "../regions/Header";
import SideBar from "../regions/SideBar";
import Body from "../regions/Body";
import {Grid} from "@mui/material";


export interface AppProps {

}

const MainPage = (props: AppProps) => {

    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 4 }}>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={2}>
                    <SideBar />
                </Grid>
                <Grid item xs={10}>
                    <Body />
                </Grid>
            </Grid>
        </div>
    )
}

export default MainPage