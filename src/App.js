// import logo from './logo.svg';
 import './App.css';
 import {  BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './Header';
import Login from './Login';
import Slides from './Slides';
import CarouselController from './component/CarouselController';
import AllProduct from './AllProduct';



  function App() {
   
    const user = "huz";
     return (
      <BrowserRouter>
     <div className="App">

     {!user ? (
        <Login/>
     ):(
        <>
     
     
           <Routes>
            <Route path="/" element={<Header />}/>
      </Routes>
      <CarouselController/> 
      <AllProduct/>
               
        </>
     )}
    </div>
    </BrowserRouter>
   );
 }

 export default App;












   