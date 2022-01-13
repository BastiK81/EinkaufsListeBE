import React, {ChangeEvent, ChangeEventHandler, useState} from "react";
import submitSignIn from "../utils/submitSignin";
import {Box, Button, Grid, TextField} from "@mui/material";

interface UserData {
    eMail: string;
    password: string;
    retype: string;
}

export interface AppProps {

}

const SignUp = (props: AppProps) => {

    const [passwordValid, setPasswordValid] = useState(false)

    const [userData, setUserData] = useState<UserData>({eMail: "", password: "", retype: ""})

    const handleChangeEMail: ChangeEventHandler<HTMLInputElement> = (event: ChangeEvent<HTMLInputElement>) => {
        setUserData({...userData, eMail : event.target.value})
    };

    const handleChangePassword: ChangeEventHandler<HTMLInputElement> = (event: ChangeEvent<HTMLInputElement>) => {
        setUserData({...userData, password : event.target.value})
        if (event.target.value === userData.retype && !(event.target.value === "")) {
            setPasswordValid(true)
        } else {
            setPasswordValid(false)
        }
    };

    const handleChangeRetypePassword: ChangeEventHandler<HTMLInputElement> = (event: ChangeEvent<HTMLInputElement>)=> {
        setUserData({...userData, retype : event.target.value})
        if (event.target.value === userData.password && !(event.target.value === "")) {
            setPasswordValid(true)
        } else {
            setPasswordValid(false)
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (userData.password === userData.retype) {
            alert(submitSignIn(userData.eMail, userData.password));
        } else {
            alert("Password dont Match")
        }
        event.preventDefault();
    };

    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            required
                            id="standard-required"
                            label="Required"
                            type="text"
                            defaultValue="E-Mail"
                            size="small"
                            variant="standard"
                            value={userData.eMail}
                            onChange={handleChangeEMail}
                        />
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            size="small"
                            variant="standard"
                            value={userData.password}
                            onChange={handleChangePassword}
                        />
                        <TextField
                            id="standard-password-input"
                            label="Retype"
                            type="password"
                            autoComplete="current-password"
                            size="small"
                            variant="standard"
                            value={userData.retype}
                            onChange={handleChangeRetypePassword}
                        />
                    </Box>
                    {passwordValid && <Button variant="contained" color="success">
                        Success
                    </Button>}
                    {!passwordValid && <Button variant="outlined" color="error">
                        Error
                    </Button>}
                </Grid>
            </Grid>
        </div>
    )

}

export default SignUp