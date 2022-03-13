import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Login from "./pages/Login";
import Editor from "./pages/Editor";
import './App.css';
import { Grid } from '@mui/material';

function App() {
  return (
    <Grid container sx={{height:"100vh"}} justifyContent="center" alignContent="center">
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/editor" element={<Editor/>} />
      </Routes>
    </Router>
    </Grid>
  );
}

export default App;
