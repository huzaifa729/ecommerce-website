import React from 'react'
import styled from 'styled-components'
import Logo3 from "../src/images/Logo3.png"

function Header() {
  return (
      <Container>
          <HeaderLogo>
          <Title>D-SHOP</Title>
          <img src="https://cdn.pixabay.com/photo/2012/04/11/17/58/arrow-29170__340.png"/>
        </HeaderLogo>

        <Headertitles>
           <Navone>Home</Navone>
           <Navtwo>Offers</Navtwo>
           <Navthree>Stories</Navthree>
        </Headertitles>
      </Container>
  )
}

export default Header

const Container = styled.div`
     display:flex;
     /* background: rgb(2,0,36);
background: linear-gradient(40deg, rgba(2,0,36,1) 0%, rgba(1,1,10,1) 110%, rgba(0,212,255,1) 100%);
width: 100%;
height: 70px;
margin-top: 0px; 
 border-radius:1px; */
 background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(11,11,40,1) 100%, rgba(0,212,255,1) 100%);
 width: 100%;
height: 87px;
`

const HeaderLogo = styled.div`
    color: black;
    display:flex;
    flex-direction:column;
  margin-left:40px;
    margin-top:14px; 

    img{
       margin-left:30px;
     max-width:45px;
      object-fit:contain;
     margin-top:-4px;
    }
`

 const Title = styled.span`
     font-size:35px;
   font-family: Verdana, Arial, Helvetica, sans-serif;  
     background: rgb(123,136,136);
background: linear-gradient(0deg, rgba(123,136,136,1) 0%, rgba(0,0,0,1) 100%);
            -webkit-text-fill-color: transparent;
            /* -webkit-background-clip: text; */
             -webkit-background-clip: text;
              text-shadow: 2px 2px;
               color: beige; 
           /* color:white; */
        
`


const Headertitles  = styled.div`
  color: white;
   display: flex;
   align-items: center;
   text-align: center;
   padding: 3px 23px;
 
`

const Navone = styled.div`
   margin:3px 18px;
   font-size:22px;
   font-family: Verdana, Arial, Helvetica, sans-serif;

   :hover{
      color:goldenrod;
      transition: 0.5s ease-in;
   }
`

const Navtwo = styled.div`
 margin:3px 18px;
 font-size:22px;
   font-family: Verdana, Arial, Helvetica, sans-serif;

   :hover{
      color:goldenrod;
      transition: 0.5s ease-in;
   }
`
const Navthree = styled.div`
 margin:3px 18px;
 font-size:22px;
   font-family: Verdana, Arial, Helvetica, sans-serif;

   :hover{
    color:goldenrod;
      transition: 0.5s ease-in;
   }
`
