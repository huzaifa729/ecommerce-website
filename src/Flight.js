import React from 'react';
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Product7 from './Product7';

function Flight() {
  return (
    <Container>
            <Flexi>
        <Fasn>
        <Link style={{textDecoration: "none"}} to ="/offers"><Leftarrow><ArrowBackIosNewIcon fontSize='large'/></Leftarrow></Link>
        <Spans>Flight</Spans>
        </Fasn>

        <Searchbox>
           <SearchIconn> <SearchIcon fontSize='medium' /> </SearchIconn>
           <Searchbtn type="text" placeholder='Search here for flight'></Searchbtn>
        </Searchbox>

   </Flexi>

   
<Row>
<DispalyRow>
  <Product7
  id="01"
  img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/offer-creatives/exclusive-offers/20220601/AAI_Valuepacks_EO_v3.jpg"
  title="Valid till 31/12/22"
  info="Get 50% off on Add-On Packs"
/>

<Product7
  id="02"
  img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/offer-creatives/exclusive-offers/20220701/EO_AirAsia_NeuPass10_14_07.jpg"
  title="Valid till 16/10/22"
  info="10% off on domestic flights* for double vaccinated flyers"
/>

<Product7
  id="03"
  img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/offer-creatives/exclusive-offers/20220701/AIRASIA_PREMIUMFLEX_EO.jpg"
  title="Valid till 30/10/22"
  info="A whole lot of benefit worth ₹3500"
/>
</DispalyRow> 
</Row>
    </Container>
  )
}

export default Flight;

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