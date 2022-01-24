import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import Navigation from './components/NavBar';
import Header from './components/header';
import Footer from './components/footer';

//Page import declarations
import {Home} from './screens/home';
import { AirbnbIndex } from './screens/airbnb/airbnbIndex';



function App() {
  return (
    <div className="text-3xl">
      <header>
        <Header />
      </header>
      <main>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/airbnb" element={<AirbnbIndex />} />
            </Routes>
          </div>
        </Router>
      </main>
    </div>
  );
}

export default App;
