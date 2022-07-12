import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercise-list.component"
import EditExercise from "./components/edit-exercise.component"
import CreateExercise from "./components/create-exercise.component"
import CreateUsers from './components/create-user.component'; 
import ShowProgress from './components/show-progress.component';
function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <Navbar />
        <br/>
        <Routes>
          <Route path='/' exact element={<ShowProgress/>} />
          <Route path='/excercise-list' element={<ExercisesList/>} />
          <Route path='/edit/:id' element={<EditExercise/>} />
          <Route path='/create' element={<CreateExercise/>} />
          <Route path='/user' element={<CreateUsers/>} />
        </Routes>
   

    </div>
      
    </BrowserRouter>
  );
}

export default App;
