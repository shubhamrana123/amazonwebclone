import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import InnerApp from './InnerApp';
import { Alert, Box, Snackbar } from "@mui/material";
function App() {
  const RenderRoutes = () =>{
    return (
      <>
      <Routes>

        <Route path='/*' element={<InnerApp/>}/>
      </Routes>
      </>
    )
  }
  return (
<>
<Box>
  <Router>
    {RenderRoutes()}
  </Router>
</Box>
</>
  );
}

export default App;
