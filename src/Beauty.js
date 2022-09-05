import React from 'react'
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Product3 from './Product3';

function Beauty() {
  return (
    <Container>
   
    <Flexi>
    <Fasn>
    <Link style={{textDecoration: "none"}} to ="/offers"><Leftarrow><ArrowBackIosNewIcon fontSize='large'/></Leftarrow></Link>
    <Spans>Beauty</Spans>
    </Fasn>

    <Searchbox>
       <SearchIconn> <SearchIcon fontSize='medium' /> </SearchIconn>
       <Searchbtn type="text" placeholder='Search here for Beauty'></Searchbtn>
    </Searchbox>

</Flexi>

<Row>
 <DispalyRow>
 <Product3
   id="01"
   img="https://tatadigital-prod.adobecqms.net/content/dam/tcp/brands/tata-cliq/29-mar-2022-bty/Essence.jpg"
   title="Valid till 30/09/22"
   info="Up to 20% off on Essence"
/>

<Product3
   id="02"
   img="https://tatadigital-prod.adobecqms.net/content/dam/tcp/brands/tata-cliq/29-mar-2022-bty/Sugar.jpg"
   title="Valid till 20/09/22"
   info="Flat 10%  on Sugar Cosmetics"
/>

<Product3
   id="03"
   img="https://tatadigital-prod.adobecqms.net/content/dam/tcp/brands/tata-cliq/29-mar-2022-bty/Mamaearth.jpg"
   title="Valid till 30/09/22"
   info="Flat 10% off on Mamaearth"
/>
</DispalyRow>  

  <DispalyRow>
   <Product3
   id="04"
   img="https://tatadigital-prod.adobecqms.net/content/dam/tcp/brands/tata-cliq/29-mar-2022-bty/Brut.jpg"
   title="Valid till 30/09/22"
   info="Up to 45% off on Brut"
/>

<Product3
   id="05"
   img="https://www.tatadigital.com/content/dam/tcp/brands/tata-cliq/29-mar-2022-bty/GilletteNew.jpg"
   title="Valid till 30/09/22"
   info="Up to 20% off on Gillette"
/>

<Product3
   id="06"
   img="https://tatadigital-prod.adobecqms.net/content/dam/tcp/brands/tata-cliq/01-04-2022-bty-offers/17Revlon41.jpg"
   title="Valid till 30/09/22"
   info="Flat 20% off on Revlon "
/>
</DispalyRow>   

<DispalyRow>
   <Product3
   id="07"
   img="https://tatadigital-prod.adobecqms.net/content/dam/tcp/brands/tata-cliq/29-mar-2022-bty/4711_50.jpg"
   title="Valid till 30/09/22"
   info="Flat 20% off on 4711"
/>

<Product3
   id="08"
   img="https://tatadigital-prod.adobecqms.net/content/dam/tcp/brands/tata-cliq/01-04-2022-bty-offers/25Truefitthill.jpg"
   title="Valid till 30/09/22"
   info="Starting at ₹1,000 Truefitt & Hill"
/>

<Product3
   id="09"
   img="https://tatadigital-prod.adobecqms.net/content/dam/tcp/brands/tata-cliq/01-04-2022-bty-offers/7LorealParis.jpg"
   title="Valid till 30/09/22"
   info="Up to 35% off on L'Oreal Paris"
/>
</DispalyRow> 

  <DispalyRow>
   <Product3
   id="10"
   img="https://tatadigital-prod.adobecqms.net/content/dam/tcp/brands/tata-cliq/29-mar-2022-bty/Ajmal.jpg"
   title="Valid till 30/09/22"
   info="Up to 60% off on Ajmal"
/>

<Product3
   id="11"
   img="https://tatadigital-prod.adobecqms.net/content/dam/tcp/brands/tata-cliq/29-mar-2022-bty/Guess.jpg"
   title="Valid till 30/09/22"
   info="Up to 50% off on Guess"
/>

<Product3
   id="12"
   img="https://tatadigital-prod.adobecqms.net/content/dam/tcp/brands/tata-cliq/29-mar-2022-bty/Maybeline.jpg"
   title="Valid till 30/09/22"
   info="Up to 50% off on Maybelline"
/>
</DispalyRow>   

</Row>
</Container>
  )
}

export default Beauty;

const Container = styled.div`
 margin-left:30px;
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