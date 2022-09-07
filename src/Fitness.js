import React from 'react';
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Product5 from './Product5';

function Fitness() {
  return (
   <Container>
      <Flexi>
        <Fasn>
        <Link style={{textDecoration: "none"}} to ="/offers"><Leftarrow><ArrowBackIosNewIcon fontSize='large'/></Leftarrow></Link>
        <Spans>Fitness</Spans>
        </Fasn>

        <Searchbox>
           <SearchIconn> <SearchIcon fontSize='medium' /> </SearchIconn>
           <Searchbtn type="text" placeholder='Search here for fitness'></Searchbtn>
        </Searchbox>

   </Flexi>


<Row>
<DispalyRow>
  <Product5
  id="01"
  img="https://www.tatadigital.com/content/dam/tcp/brands/cult/prod-tata/sep3/Outdoorcycle.jpg"
  title="cultsport"
  info="Rimo 27.5 21-speed steel MTB (Shimano gears)"
  price={15669}
  cutprice={39999}
/>

<Product5
  id="02"
  img="https://www.tatadigital.com/content/dam/tcp/brands/cult/prod-tata/sep3/SportswearMale.jpg"
  title="cultsport"
  info="Tshirts, shorts & gym accessories"
  price={974}
  cutprice={1499}
/>

<Product5
  id="03"
  img="https://www.tatadigital.com/content/dam/tcp/brands/cult/prod-tata/sep3/Strengthproduct.jpg"
  title="cultsport"
  info="Dumbell, barbell, Kettlebell"
  price={7499}
  cutprice={13999}
/>
</DispalyRow>  

 <DispalyRow>
  <Product5
  id="04"
  img="https://www.tatadigital.com/content/dam/tcp/brands/cult/prod-tata/sep3/SportswearFemale.jpg"
  title="cultsport"
  info="Tshirts, tights & more"
  price={2404}
  cutprice={3699}
/>

<Product5
  id="05"
  img="https://www.tatadigital.com/content/dam/tcp/brands/cult/prod-tata/sep3/cultrow.jpg"
  title="cultsport"
  info="10 day return policy with refund"
  price={39900}
  cutprice={999000}
/>

<Product5
  id="06"
  img="https://www.tatadigital.com/content/dam/tcp/brands/cult/prod-tata/july30pds/TATANEUBANNER.jpg"
  title="cultsport"
  info="Gyms, group classes & at home"
  price={1252}
  cutprice={456}
/>
</DispalyRow>   

<DispalyRow>
  <Product5
  id="07"
  img="https://www.tatadigital.com/content/dam/tcp/brands/cult/prod-tata/sep3/Cardio.jpg"
  title="cultsport"
  info="Treadmills, exercise bike & spinbikes"
  price={36999}
  cutprice={68999}
/>
</DispalyRow> 
</Row>
</Container>
  )
}

export default Fitness;

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