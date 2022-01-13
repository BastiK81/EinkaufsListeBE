import React, {ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, MouseEventHandler, useState} from "react";
import {Box, Button, Divider, Grid, Stack, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

interface UserData {
    eMail: string;
    password: string;
}

export interface AppProps {

}

const Login = (props: AppProps) => {

    const [userData, setUserData] = useState<UserData>({eMail: "", password: ""})

    const handleChangeEMail:ChangeEventHandler<HTMLInputElement> = (event: ChangeEvent<HTMLInputElement>) => {
        setUserData({...userData, eMail : event.currentTarget.value})
    };

    const handleChangePassword:ChangeEventHandler<HTMLInputElement> = (event: ChangeEvent<HTMLInputElement>) => {
        setUserData({...userData, password : event.currentTarget.value})
    };

    const clicked = () => {
        alert('clicked');
    }

    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Stack direction="row" spacing={1}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        type="text"
                        defaultValue="E-Mail"
                        size="small"
                        value={userData.eMail}
                        onChange={handleChangeEMail}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        size="small"
                        value={userData.password}
                        onChange={handleChangePassword}
                    />
                <Button variant="contained" endIcon={<SendIcon />} onClick={clicked}>
                    Send
                </Button>
                </Stack>
            </Grid>
        </Grid>
    )

}

export default Login