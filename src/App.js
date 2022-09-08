//done through rafce snippet

import React from 'react';
//routes between homepage and exercise details page
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { Box } from '@mui/material';

import "./App.css";
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signup from './pages/SignUp';
import Login from './pages/Login'
import WorkoutTracker from './pages/WorkoutTracker';
import ForgotPassword from './pages/ForgotPassword';
import UpdateProfile from './pages/UpdateProfile';


import PrivateRoute from './components/PrivateRoute';



import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthProvider } from './contexts/AuthContext';



const App = () => {
  return (
    <Router>

      <AuthProvider>

        <Box width="400px" sx={{ width: { xl: '1448px' } }} m="auto">
          <Navbar />
          <Routes>
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <PrivateRoute exact path='/workout-tracker' element={<WorkoutTracker/>} />
            <PrivateRoute exact path='/update-profile' element={<UpdateProfile/>} />

            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />

          </Routes>
          <Footer />
        </Box>
      </AuthProvider>
    </Router>


  )
}

export default App