// import logo from './logo.svg';
 import './App.css';
 import {  BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './Header';

 function App() {
     return (
      <BrowserRouter>
     <div className="App">
        <Routes>
            <Route path="/" element={<Header />}/>
        </Routes>  
    </div>
    </BrowserRouter>
   );
 }

 export default App;




   