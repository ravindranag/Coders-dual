import { Card,Button,TextField, Grid } from "@mui/material";
import React, { useState,useContext } from "react";
import { UserDetails } from "../data/UserDetails";

const Login = () => {
    
    const { user, setUser, content, setContent } = useContext(
        UserDetails
    );

    const handleNameChange = e => {
        setUser({
            ...user,

            name: e.target.value
        })
    }

    const handleRegdChange = e => {
        setUser({
            ...user,

            registration_number: e.target.value
        })
    }

    const handleIdChange = e => {
        setUser({
            ...user,

            code_id: e.target.value
        })
    }


    return (
        <Grid item lg={4} md={6} xs={10}>
        <Card elevation={10} sx={{height:500,borderRadius:3}}>
            <h1 style={{textAlign:"center"}}>Sign In</h1>
            <Grid container sx={{height:"70%"}} rowGap={3} justifyContent="center" alignItems="center">
                <Grid xs={8} item>
                <TextField 
                    fullWidth label="Username" 
                    placeholder="Enter Name"
                    onChange={handleNameChange}
                    value= {user.name}
                />
                </Grid>
                <Grid xs={8} item>
                <TextField 
                    fullWidth label="Registration number" 
                    placeholder="Enter Regd. Number"
                    onChange={handleRegdChange}
                    value= {user.registration_number}
                />
                </Grid>
                <Grid xs={8} item>
                <TextField 
                    fullWidth label="Code ID" 
                    placeholder="Enter Code Id"
                    onChange={handleIdChange}
                    value= {user.code_id}
                />
                </Grid>
                <Grid xs={8} item sx={{textAlign:"center"}}>
                <Button 
                    fullWidth 
                    size="large" 
                    variant="contained"
                    disabled = {user.name === "" ||user.registration_number === "" ||user.code_id === "" ? true : false}
                    >Submit
                </Button>
                </Grid>

            </Grid>
        </Card>
        </Grid>
    );
}

export default Login;