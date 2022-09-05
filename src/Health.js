import React from 'react'
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Product2 from './Product2';

function Health() {
  return (
     <Container>
          <Flexi>
        <Fasn>
        <Link style={{textDecoration: "none"}} to ="/offers"><Leftarrow><ArrowBackIosNewIcon fontSize='large'/></Leftarrow></Link>
        <Spans>Health</Spans>
        </Fasn>

        <Searchbox>
           <SearchIconn> <SearchIcon fontSize='medium' /> </SearchIconn>
           <Searchbtn type="text" placeholder='Search here for health'></Searchbtn>
        </Searchbox>

   </Flexi> 

   <Row>
     <DispalyRow>
       <Product2
       id="01"
       img="https://www.tatadigital.com/content/dam/tcp/brands/1mg/ConsultPayday.png"
       title="Valid till 05/09/22"
       info="10% off + earn 5% NeuCoins on all online doctor consultations"
/>

<Product2
       id="02"
       img="https://www.tatadigital.com/content/dam/tcp/brands/1mg/LabsAllUsers.jpg"
       title="Valid till 21/09/22"
       info="Flat 50% off + extra 20% off + earn 5% NeuCoins on health checkups*"
/>

<Product2
       id="03"
       img="https://www.tatadigital.com/content/dam/tcp/brands/1mg/MedicineNewUser.jpg"
       title="Valid till 21/09/22"
       info="25% off + earn 5% NeuCoins on your 1st medicine order*"
/>
 </DispalyRow>  

      <DispalyRow>
       <Product2
       id="04"
       img="https://www.tatadigital.com/content/dam/tcp/brands/1mg/MedicineRepeatUser.png"
       title="Valid till 21/09/22"
       info="20% off + earn 5% NeuCoins on your medicine order*"
/>

<Product2
       id="05"
       img="https://www.tatadigital.com/content/dam/tcp/brands/1mg/OTCAllUsers.jpg"
       title="Valid till 21/09/22"
       info="Up to 60% off + earn 5% NeuCoins on health products"
      
/>
</DispalyRow>   
 </Row>
     </Container>
  )
}

export default Health;

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
 margin-left: 20px;
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