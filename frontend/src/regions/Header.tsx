import React from "react";
import Login from "../component/Login";
import {Box, Grid} from "@mui/material";


export interface AppProps {

}

const Header = (props: AppProps) => {

    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            bgcolor: 'background.',
                            overflow: 'hidden',
                            borderRadius: '12px',
                            boxShadow: 1,
                            fontWeight: 'bold',
                        }}
                    >
                    <h1>Logo</h1>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            bgcolor: 'background.',
                            overflow: 'hidden',
                            borderRadius: '12px',
                            boxShadow: 1,
                            fontWeight: 'bold',
                        }}
                    >
                        <h1>Title</h1>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            bgcolor: 'background.',
                            overflow: 'hidden',
                            borderRadius: '12px',
                            boxShadow: 1,
                            fontWeight: 'bold',
                        }}
                    >
                        <Login />
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header