import React from 'react'

import './index.css';
import Navbar from './component/Navbar';
import Form from './component/Form';
import Footer from './component/Footer';
import Copyright from './component/Copyright';
import RegistrationForm from './component/RegistrationForm';
import Banner from './component/Banner';
import Topbar from './component/Topbar';
import ExamSub from './component/ExamSub';
import Htmltestpage from './component/All-subjects/Htmltestpage';
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom';

export default function app() {

    // let isLogged= false
  return (
    <>
    <BrowserRouter>
    <Topbar/>
     <Navbar/>
        <Routes>
              <Route path="/" element={ <Banner/>}/>
            <Route path="/lform" element={<Form/>}/>
            <Route path="/reg"  element={<RegistrationForm/>}/>
            {/* <Route path="/examsub" element={ isLogged ? <ExamSub/> : <Navigate to="/lform" replace/> }/> */}
            {/* this method is used to checkif the user is logged in or not  */}
            <Route path="/examsub"  element={<ExamSub/>}/>
            <Route path="/Htmltestpage/:category" element={<Htmltestpage/>} exact/>
        </Routes>
        <Footer/>
     <Copyright/>
     </BrowserRouter>
     </>
  )
}
