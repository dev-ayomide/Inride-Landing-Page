import React from 'react'
import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeaderSection from './components/HeaderSection';
import "./styles/App.css"
import Footer from './components/Footer';
import AdminDashboard from "./components/AdminDashboard";
	
const App = () => {
	return (
	  <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeaderSection />
            <Footer />
          </>
        } />
        
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
	);
}

export default App

