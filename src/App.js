import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import {Navigation} from './components/NavBar';
import Header from './components/header';
import Footer from './components/footer';

//Page import declarations
import Home from './screens/home';
import  AirbnbIndex  from './screens/airbnb/airbnbIndex';
import About from './screens/about';

import { Listing } from './screens/airbnb/listing';



function App() {
  return (
    <div className="">
      <div>
        <Navigation/>
      </div>
      <main class="container">
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/about' element={<About/>} />
              <Route path="/airbnb" element={<AirbnbIndex />} />
              <Route  path="/airbnb/:_id" element={<Listing/>}></Route>
              
            </Routes>
          </div>
       </Router>
      </main>
      <footer class="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
