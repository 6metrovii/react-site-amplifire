import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../header';
import StockBlock from '../stock-block';
import Footer from '../footer';
import Modal from '../modal';
import {TabsPages, CardPage, SliderPage, Homepage} from '../pages'

const  App = () => {
  return (
    <Router>
          <>
        <Header/>        
        <Routes>
          <Route path='/*' element={<Homepage/>} />
          <Route path='/amplifire' element={<TabsPages/>}/>
          <Route path='/slider' element={<SliderPage/>}/>
          <Route path='/cards' element={<CardPage/>} />
        </Routes>
        <StockBlock/>
        <Footer/>
        <Modal/>
    </>
    </Router>
  );
}
export default App;
