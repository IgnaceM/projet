import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderText from './HeaderText'
import Body from './Body';
import Footer from './Footer'

function HomeText(){
  return (
   <>
    <HeaderText/>
    <Body />
    <Footer/>
   </>
  )
}
export default HomeText;