import { Card,Button,TextField } from "@mui/material";
import React from "react";

const Login = () => {
    return (
        <Card variant="outlined" sx={{height:500, width:500}}>
            <h1>User Details</h1>
            <TextField label="Username"/>
            <TextField label="Password"/>
            <Button variant="contained">Submit</Button>
        </Card>
    );
}

export default Login;