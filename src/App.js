// import logo from './logo.svg';
 import './App.css';
 import {  BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './Header';
import Login from './Login';

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
        </>
     )}
    </div>
    </BrowserRouter>
   );
 }

 export default App;




   