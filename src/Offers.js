import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Offers() {
  return (
   <Container>

<Banner>
  {/* <img src='https://www.tatadigital.com/v2/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fnc2ghyne%2Fproduction%2F58057920ed6dcd1e08e6febc6d857329cfba878d-1000x500.jpg&w=750&q=75'/> */}
  <img src="https://www.tatadigital.com/v2/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fnc2ghyne%2Fproduction%2F52240c1048b9fd5f2daa6bf78d17c7e7d0bce0b9-1000x500.jpg&w=750&q=75" alt="img"/>
</Banner>

<AllCaptured>

  <Filter>
  All are here what you want to get
  </Filter>


  <AllFasion>

    <OfferFlex>

 <Link style={{textDecoration: 'none'}} to = "/fashion">
      <Fashion>
        <Img> 
        <img src="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/pages/homepage/aggregated-banners/digital-assets/FashionNew.svg"alt='fashion'/>
         </Img>
         <Name>Fashion</Name>
      </Fashion>
      </Link>

<Link  style={{textDecoration: "none"}} to="/health">
    <Health>
       <Img>
       <img src="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/pages/homepage/aggregated-banners/digital-assets/Offerzone_Icon_Healthcare.svg"alt='heath'/>
       </Img> 
       <Name>Health</Name> 
    </Health> 
    </Link>

    <Link  style={{textDecoration: "none"}} to="/beauty">
    <Beauty>
      <Img>
       <img src='https://www.tatadigital.com/content/dam/tcp/app-core/app-content/pages/homepage/aggregated-banners/digital-assets/BeautyNew.svg'alt='beauty'/>
      </Img>  
      <Name>Beauty</Name>
    </Beauty> 
</Link>
  
        
    </OfferFlex>

    
    <OfferFlex>

      <Hotels>
        <Img> 
        <img src="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/pages/homepage/aggregated-banners/digital-assets/travel.svg"alt='hotels'/>
         </Img>
         <Name>Hotels</Name>
      </Hotels>

    <Fitness>
       <Img>
       <img src="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/pages/homepage/aggregated-banners/digital-assets/Fitness.svg"alt='fitness'/>
       </Img> 
       <Name>Fitness</Name> 
    </Fitness> 

    <Grocyery>
      <Img>
       <img src='https://www.tatadigital.com/content/dam/tcp/app-core/app-content/pages/homepage/aggregated-banners/digital-assets/essentials.svg'alt='grocery'/>
      </Img>  
      <Name>Grocery</Name>
    </Grocyery> 

  
        
    </OfferFlex>


    
    <OfferFlex>

      <Flights>
        <Img> 
        <img src="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/pages/homepage/aggregated-banners/digital-assets/airline.svg"alt='flights'/>
         </Img>
         <Name>Flights</Name>
      </Flights>

    <Eat>
       <Img>
       <img src="https://www.tatadigital.com/content/dam/tcp/app-core/app-content/pages/homepage/aggregated-banners/digital-assets/Fooddrinksnew.svg"alt='eat&drink'/>
       </Img> 
       <Name>Eat & Drink</Name> 
    </Eat> 

    <Luxury>
      <Img>
       <img src='https://www.tatadigital.com/content/dam/tcp/app-core/app-content/pages/homepage/aggregated-banners/digital-assets/Luxurynew.svg'alt='luxury'/>
      </Img>  
      <Name>Luxury</Name>
    </Luxury> 

  
        
    </OfferFlex>

  </AllFasion>

  <Explore>
    <Button>
      <img src='https://www.tatadigital.com//etc.clientlibs/tcp-pwa/clientlibs/clientlib-react/resources/assets/location.svg'/>
      <Span>Explore offers near you</Span>
      <Arrow><img src='https://www.tatadigital.com//etc.clientlibs/tcp-pwa/clientlibs/clientlib-react/resources/assets/chevron-right.svg'/></Arrow>
    </Button>
  </Explore>

</AllCaptured>

   </Container>
  )
}

export default Offers;


const Container = styled.div`
`;

const Banner = styled.div`
text-align: center;
justify-content: center;
margin-top: 40px;


img{
  width: 890px;
  object-fit: contain;
  /* padding: 15px 26px; */
  border: 15px solid black;
}
`

const AllCaptured = styled.div`

`;

const Filter = styled.div`
  margin-top: 40px;
  margin-left: 100px;
  font-size: 35px;
  font-family: Arial, Helvetica, sans-serif;
  color: bisque;
  letter-spacing: 0.6px;
  text-decoration: underline;
`

const AllFasion = styled.div`
margin-top: 30px;

  
`


const OfferFlex = styled.div`
 display:flex;
 text-align: center;
 justify-content: center;
margin-bottom: 18px;
` 

const Fashion = styled.div`
  margin: 0;
`

const Img = styled.div`
 padding: 3px 21px;

   img{
    width: 150px;
    object-fit:contain;
   }
`
const Name = styled.div`
   color: white;
   font-family: Arial, Helvetica, sans-serif;
   font-size: 21px;
   letter-spacing: 1.2px;
`

const Health = styled.div`
margin-bottom: 5px;
`

const Beauty = styled.div`
margin-bottom: 5px;
`

const Hotels = styled.div`
`
const Fitness = styled.div`
`
const Grocyery = styled.div`
`
const Flights = styled.div`
`
const Eat = styled.div`
`
const Luxury = styled.div`
`

const Explore = styled.div`
 margin-left: 12%;
 margin-bottom: 20px;
`
const Button = styled.button`
background: linear-gradient(rgb(43, 45, 53) 0%, rgb(23, 25, 33) 100%);
border-radius: 10px;
display: flex;
 img{
  /* margin-left: 23px; */
  object-fit: contain;
  margin-left: -5px;
 }
`
const Span = styled.span`
 margin-left: 12px;
 font-size: 19px;
 font-family: Arial, Helvetica, sans-serif;
 letter-spacing: 0.5px;
 color: white;
 padding: 6px;
margin-top: 5px;
`

const Arrow = styled.div`
  margin-left:20px;
  margin-top: 7px;
  cursor: pointer;
  img{
    width: 35px;
  }
`








