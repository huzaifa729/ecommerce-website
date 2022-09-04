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
        <Link style={{textDecoration: "none"}} to ="/offers"><Leftarrow><ArrowBackIosNewIcon fontSize='large'/></Leftarrow>   </Link>
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
       id="01"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/men-_-women-apparel/Levisupdated.jpg"
       title="Levi's"
       info="Flat 50% off + extra 10% off* on Levi's"
       price={519}
       cutprice={1256}
/>

<Product
       id="01"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/men-_-women-apparel/Levisupdated.jpg"
       title="Levi's"
       info="Flat 50% off + extra 10% off* on Levi's"
       price={519}
       cutprice={1256}
/>
 </DispalyRow>  

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
       id="01"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/men-_-women-apparel/Levisupdated.jpg"
       title="Levi's"
       info="Flat 50% off + extra 10% off* on Levi's"
       price={519}
       cutprice={1256}
/>

<Product
       id="01"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/men-_-women-apparel/Levisupdated.jpg"
       title="Levi's"
       info="Flat 50% off + extra 10% off* on Levi's"
       price={519}
       cutprice={1256}
/>
 </DispalyRow>   

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
       id="01"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/men-_-women-apparel/Levisupdated.jpg"
       title="Levi's"
       info="Flat 50% off + extra 10% off* on Levi's"
       price={519}
       cutprice={1256}
/>

<Product
       id="01"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/men-_-women-apparel/Levisupdated.jpg"
       title="Levi's"
       info="Flat 50% off + extra 10% off* on Levi's"
       price={519}
       cutprice={1256}
/>
 </DispalyRow> 

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
       id="01"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/men-_-women-apparel/Levisupdated.jpg"
       title="Levi's"
       info="Flat 50% off + extra 10% off* on Levi's"
       price={519}
       cutprice={1256}
/>

<Product
       id="01"
       img="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-fashion/30_03_2022/men-_-women-apparel/Levisupdated.jpg"
       title="Levi's"
       info="Flat 50% off + extra 10% off* on Levi's"
       price={519}
       cutprice={1256}
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
