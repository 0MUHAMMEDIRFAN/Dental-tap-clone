import { useState } from 'react'
import './App.css'
import "./assets/Fonts/poppins-font.css";
import Topbar from './components/topbar'
import Footer from './components/footer'
import Main from './components/main';
import Office from './components/Office'
import { Routes, Route } from "react-router-dom";
import Layout1 from '../Screens/Layout1';
import TreatmentProcesses from './components/TreatmentProcesses';
import Communications from './components/Communications';
import HelpCenter from './components/HelpCenter';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout1 />} exact>
          <Route path="/" element={<Main />} exact />
          <Route path="/practice-office" element={<Office />} exact />
          <Route path="/treatment-processes" element={<TreatmentProcesses />} exact />
          <Route path="/Communications" element={<Communications />} exact />
          <Route path="/help-center" element={<HelpCenter />} exact />
        </Route>
      </Routes>
    </>
  )
}

export default App
