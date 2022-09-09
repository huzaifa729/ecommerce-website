import React from 'react';
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Product9 from './Product9';

function Luxury() {
  return (
     <Container>
         <Flexi>
        <Fasn>
        <Link style={{textDecoration: "none"}} to ="/offers"><Leftarrow><ArrowBackIosNewIcon fontSize='large'/></Leftarrow></Link>
        <Spans>Luxury</Spans>
        </Fasn>

        <Searchbox>
           <SearchIconn> <SearchIcon fontSize='medium' /> </SearchIconn>
           <Searchbtn type="text" placeholder='Search here for luxury'></Searchbtn>
        </Searchbox>

   </Flexi>
   <Row>
     <DispalyRow>
       <Product9
       id="01"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/cliq_offer_images_24052022/Tissot.jpg"
       title="TISSOT"
       info="Special offers on Tissot"
       price={49500}
       cutprice={62556}
/>

<Product9
       id="02"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/cliq_offer_images_24052022/clinique.jpg"
       title="MOISTURE SURGE"
       info="Buy products worth ₹3,000 & get ₹2,200 makeup kit free"
       price={819}
       cutprice={2256}
/>

<Product9
       id="03"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/cliq_offer_images_24052022/Forest_essentials.jpg"
       title="SOUNDARYA CREAM"
       info="Get Mini + Bestseller samples on min purchase of ₹1,499"
       price={2519}
       cutprice={3756}
/>
 </DispalyRow>  

      <DispalyRow>
       <Product9
       id="04"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/cliq_offer_images_24052022/Delsey.jpg"
       title="DELSEY PARIS"
       info="Up to 30% off on Delsey"
       price={4519}
       cutprice={7256}
/>

<Product9
       id="05"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/cliq_offer_images_24052022/LOccitane.jpg"
       title="SKIN"
       info="Get Mini + Bestseller samples on min purchase of ₹2,100"
       price={819}
       cutprice={1356}
/>

<Product9
       id="06"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/cliq_offer_images_24052022/Tommy_Hilfiger.jpg"
       title="TOMMY HILFIGER"
       info="Up to 50% off on Tommy Hilfiger"
       price={1519}
       cutprice={356}
/>
 </DispalyRow>   

 <DispalyRow>
       <Product9
       id="07"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/cliq_offer_images_24052022/Adidas.jpg"
       title="Adidas"
       info="Up to 50% off on Adidas Originals"
       price={2719}
       cutprice={1256}
/>

<Product9
       id="08"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/offer-creatives/exclusive-offers/20220601/TATACliq_EO.jpg"
       title="Clothing"
       info="Flat 10% off on Luxury"
       price={1849}
       cutprice={6556}
/>

<Product9
       id="09"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/cliq_offer_images_24052022/Tumi.jpg"
       title="Tumi"
       info="Special discounts on Tumi"
       price={8519}
       cutprice={12056}
/>
 </DispalyRow> 

      <DispalyRow>
       <Product9
       id="10"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/cliq_offer_images_24052022/Bvlgari.jpg"
       title="Bvlgari"
       info="Special offers on Bvlgari"
       price={22519}
       cutprice={15256}
/>

<Product9
       id="11"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/cliq_offer_images_24052022/Dune_London.jpg"
       title="Dune"
       info="Up to 50% off on Dune London"
       price={35519}
       cutprice={22256}
/>
 </DispalyRow>   

   </Row>
     </Container>
  )
}

export default Luxury;

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

