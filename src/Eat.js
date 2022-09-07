import React from 'react'
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Product8 from './Product8';

function Eat() {
  return (
     <Container>
             <Flexi>
        <Fasn>
        <Link style={{textDecoration: "none"}} to ="/offers"><Leftarrow><ArrowBackIosNewIcon fontSize='large'/></Leftarrow></Link>
        <Spans>Eat & Drink</Spans>
        </Fasn>

        <Searchbox>
           <SearchIconn> <SearchIcon fontSize='medium' /> </SearchIconn>
           <Searchbtn type="text" placeholder='Search here for eat & drink'></Searchbtn>
        </Searchbox>

   </Flexi>

   <Row>
<DispalyRow>
  <Product8
  id="01"
  img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/offer-creatives/exclusive-offers/20220301/Starbucks35.jpg"
  title="Valid till 31/12/22"
  info="Experience a world of rewards with Starbucks!"
/>

<Product8
  id="02"
  img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/offer-creatives/exclusive-offers/20220301/Starbucks36.jpg"
  title="Valid till 31/12/22"
  info="Get 20% off on a bill of ₹1,200 & above at Starbucks"

/>

<Product8
  id="03"
  img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/offer-creatives/exclusive-offers/20220301/Starbucks37.jpg"
  title="Valid till 31/12/22"
  info="Enjoy 15% off on a bill worth ₹600 - ₹1,199 at Starbucks"

/>
</DispalyRow>  
</Row>
     </Container>
  )
}

export default Eat;

const Container = styled.div`

`

const Flexi = styled.div`
margin-left: 180px;
margin-top: 25px;
display: flex;
`

const Fasn = styled.div`
 display: flex;
 color:white;
 margin-left: 60px;
`

const Spans = styled.div`
 font-size: 27px;
 font-family: Arial, Helvetica, sans-serif;
 margin-left: 10px;
 margin-top: 8px;
 letter-spacing: 0.4px;
`

const Leftarrow = styled.div`
 margin-top:10px;
color: white;
`

const Searchbox = styled.div`
  margin-left: 27%;
  display: flex;
  border: 3px solid white;
 align-items: center;
width: 350px;
border-radius: 5px;
`

const SearchIconn = styled.div`
color: white;
margin-left: 10px;
`

const Searchbtn = styled.input`
margin-left: 10px;
   background: none;
   outline: none;
   border: none;
   color: white;
   font-size: 19px;
   font-family: Arial, Helvetica, sans-serif;
   margin-top: 2px;
`

const Row = styled.div`
 margin-left: 175px;
 margin-top: 25px;

`

const DispalyRow = styled.div`
  display: flex;
 margin-bottom: 10px;
`