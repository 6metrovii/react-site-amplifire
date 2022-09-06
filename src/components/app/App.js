import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.sass';
import Header from '../header';
import StockBlock from '../stock-block';
import Footer from '../footer';
import Modal from '../modal';
import {TabsPages, CardPage, SliderPage, Homepage, CablePage, AmplifirePage} from '../pages'

const  App = () => {
  return (
    <div className='app-wrapp'>
          <Router>
            <>
              <Header/>        
                <Routes>
                  <Route path='/*' element={<Homepage/>} />
                  <Route path='/amplifire' element={<TabsPages/>}/>
                  <Route path='/slider' element={<SliderPage/>}/>
                  <Route path='/cards' element={<CardPage/>} />
                  <Route path='/amplifires' element={<AmplifirePage/>} />
                  <Route path='/cable' element={<CablePage/>} />
                </Routes>
                <StockBlock/>
                <Footer/>
                <Modal/>
            </>
          </Router>
        <div className="component1"></div>
        <div className="component2"></div>
        <div className="component3"></div>
    </div>

  );
}
export default App;
