import React from 'react'
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Product from './Product';


function Fashion() {
  return (
    <Container>
   
        <Flexi>
        <Fasn>
        <Link style={{textDecoration: "none"}} to ="/offers"><Leftarrow><ArrowBackIosNewIcon fontSize='large'/></Leftarrow></Link>
        <Spans>Fashions</Spans>
        </Fasn>

        <Searchbox>
           <SearchIconn> <SearchIcon fontSize='medium' /> </SearchIconn>
           <Searchbtn type="text" placeholder='Search here for fashion'></Searchbtn>
        </Searchbox>

   </Flexi>

   <Row>
     <DispalyRow>
       <Product
       id="01"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/men-_-women-apparel/Levisupdated.jpg"
       title="Levi's"
       info="Flat 50% off + extra 10% off* on Levi's"
       price={519}
       cutprice={1256}
/>

<Product
       id="02"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/watches/FOSSIL.jpg"
       title="Fossil"
       info="Up to 50% + extra 5% off on Fossil"
       price={819}
       cutprice={2256}
/>

<Product
       id="03"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/eyewear/Fast_track.jpg"
       title="Fastrack"
       info="Flat 20% off + extra 10% off* on Fastrack"
       price={2519}
       cutprice={3756}
/>
 </DispalyRow>  

      <DispalyRow>
       <Product
       id="04"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/sports/puma.jpg"
       title="Puma"
       info="Flat 37% off + extra 10% off* on Puma"
       price={4519}
       cutprice={7256}
/>

<Product
       id="05"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/sports/puma.jpg"
       title="Mochi"
       info="Flat 17% off + extra 14% off* on Mochi"
       price={819}
       cutprice={1356}
/>

<Product
       id="06"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/unisex-footwear/Unisex-METRO_.jpg"
       title="Mochi"
       info="Flat 50% off + extra 10% off* on Metro"
       price={1519}
       cutprice={356}
/>
 </DispalyRow>   

 <DispalyRow>
       <Product
       id="07"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/sports/Adidas.jpg"
       title="Adidas"
       info="Flat 60% off + extra 7% off* on Adidas"
       price={2719}
       cutprice={1256}
/>

<Product
       id="08"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/handbags/LAVIE.jpg"
       title="Lavie"
       info="Flat 50% off + extra 10% off* on Lavie"
       price={1849}
       cutprice={6556}
/>

<Product
       id="09"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/men_s_accessories/TOMMY_HILFIGER.jpg"
       title="Tommy Hilfiger"
       info="Flat 50% off + extra 10% off* on tommy hilfiger"
       price={8519}
       cutprice={12056}
/>
 </DispalyRow> 

      <DispalyRow>
       <Product
       id="10"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/jewllery/Joyalukkas.jpg"
       title="Joyalukkas"
       info="Flat 55% off + extra 3% off* on Joyalukkas"
       price={22519}
       cutprice={15256}
/>

<Product
       id="11"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/jewllery/PC_Jewellers.jpg"
       title="PC Jeweller"
       info="Flat 50% off + extra 10% off* on PC Jeweller"
       price={35519}
       cutprice={22256}
/>

<Product
       id="12"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/home/D_Decor.jpg"
       title="DDecor"
       info="Flat 50% off + extra 10% off* on DDecor"
       price={1519}
       cutprice={1256}
/>
 </DispalyRow>   

 <DispalyRow>
       <Product
       id="13"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/watches/FASTRACK.jpg"
       title="G-Shock"
       info="Flat 25% off + extra 3% off* on G-Shock"
       price={2519}
       cutprice={1056}
/>

<Product
       id="14"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/men_s_apparel/american_eagle.jpg"
       title="American Eagle"
       info="Flat 50% off + extra 10% off* on PC American Eagle"
       price={1519}
       cutprice={2256}
/>

<Product
       id="15"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/eyewear/Vincent_chase.jpg"
       title="Vincent Chase"
       info="Flat 50% off + extra 10% off* on Vincent Chase"
       price={3519}
       cutprice={1756}
/>
 </DispalyRow> 
   </Row>
    </Container>
  )
}

export default Fashion;

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
