// import logo from './logo.svg';
 import './App.css';
 import {  BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './Header';
import Login from './Login';
import Slides from './Slides';
import CarouselController from './component/CarouselController';
import AllProduct from './AllProduct';
import Doc from './Doc';
import Brands from './Brands';
import MultiItemCarousel from './MultiitemCarousel';
import Hello from './Hello';
import Infinity from './Infinity';
import DApp from './DApp';
import Footer from './Footer';
import Offers from './Offers';
import Home from './Home'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login, logout, selectUser } from "./features/userSlice";

import {auth}  from './firebase'

  function App() {
   const user = useSelector(selectUser);
   const dispatch = useDispatch();

   useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          dispatch(
            login({
              id: authUser.uid,
              name: authUser.displayName ? authUser.displayName : authUser.email,
              lastsignIn: authUser.metadata.lastSignInTime,
              verified: String(authUser.emailVerified),
              pic: authUser.photoURL
                ? authUser.photoURL
                : "https://lh3.googleusercontent.com/ogw/ADea4I5bHBJbpIvco4Yh1ARth7_gu4dl_QnpyDAU0NW8=s32-c-mo",
            })
          );
        } else {
          dispatch(logout());
        }
      });
    }, [dispatch]);
   

     return (
      <BrowserRouter>
     
     <div className="App">
   
       {""}
     {!user ? (
        <Login/>
     ):(
        <>
     
     
  
     <Header/>
           <Routes>
             <Route path="/" element={<Home />}/> 
             <Route path="/offers" element={<Offers />} />
            </Routes>
      {/* <CarouselController/>     */}
       {/* <Hello/> */}
       {/* <AllProduct/> */}
      {/* <Doc/> */}
      {/* <Brands/>     */}
      {/* <Slides/> */}
      {/* <MultiItemCarousel/>
      <MultiItemCarousel/> */}
      {/* <Infinity/>
      <DApp/>
      <Footer/> */}


        </>
     )}
    </div>
 
    </BrowserRouter>
    
   );
 }

 export default App;












   