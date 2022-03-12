import { 
  Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from "./components/Login";
import Editor from "./components/Editor";
import './App.css';
import { Grid } from '@mui/material';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path='/login' element={<Login />} />
    //     <Route path='/editor' element={<Editor />} />
    //   </Routes>
    // </Router>
    <Grid >
    <Login />
    {/* <Editor /> */}
    </Grid>
  );
}

export default App;
