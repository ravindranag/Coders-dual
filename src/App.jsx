import Login from "./pages/Login";
import './App.css';
import { Grid } from '@mui/material';

function App() {
  return (
    <Grid container sx={{height:"100vh"}} justifyContent="center" alignContent="center">
      
      <Grid item lg={4} md={6} xs={10}><Login />
      </Grid>

    </Grid>
  );
}

export default App;
