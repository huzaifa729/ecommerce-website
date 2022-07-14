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





  function App() {
   
    const user = "ui";
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
       {/* <Hello/> */}
      <AllProduct/>
      <Doc/>
       <Brands/>   
    <Slides/>
<MultiItemCarousel/>
<MultiItemCarousel/>
<Infinity/>
<DApp/>
<Footer/>
        </>
     )}
    </div>
    </BrowserRouter>
   );
 }

 export default App;












   