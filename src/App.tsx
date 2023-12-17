import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import InnerApp from './InnerApp';
import { Alert, Box, Snackbar } from "@mui/material";
import NavigationBar from './container/component/navigation-bar';
import SubNavbar from './container/component/subnavbar';
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
<NavigationBar/>
<SubNavbar/>
<Box>
  <Router>
    {RenderRoutes()}
  </Router>
</Box>
</>
  );
}

export default App;
