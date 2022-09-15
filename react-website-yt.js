import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Services from './Pages/Services';
import Products from './Pages/Products';
import SignUp from './Pages/Signup';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
//import { render } from '@testing-library/react';

function App() {
  return (
     <div>
      <Router>
      
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/Services' element={<Services/>} />
          <Route path='/Products' element={<Products/>} />
          <Route path='/Signup' element={<SignUp/>} />
        </Routes> 
         <Footer />
    
      </Router>
    </div>
    );

}

export default App;




//Should vscode folder be there...i remember i did something by mistake and i think that appeared?
//How do you retrieve reactjs projects that you created in vscode terminal?

//Reactjs snippets to make shortcuts when typing isnt working.
//white screen cant seem to remove.
//Could I have put <Home /> here?
//Practice on your imports