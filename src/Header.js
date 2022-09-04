import React from 'react'
import styled from 'styled-components'
// import Logo3 from "../src/images/Logo3.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Profile from './Profile';
 import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
//  import CarouselController from './component/CarouselController';
//  import AllProduct from './AllProduct';


function Header() {
   const [{cart},dispatch] = useStateValue('');
   
  return (

      <Container>
          <Link style={{textDecoration: 'none'}} to="/" >
          <HeaderLogo>
          <Title>D-SHOP</Title>
          <img src="https://cdn.pixabay.com/photo/2012/04/11/17/58/arrow-29170__340.png"/>
          </HeaderLogo>
         </Link>

        <Headertitles>
           <Navone>
            Home</Navone>
         <Navtwo>
         <Link to="/offers" className='linwk'>
            Offers</Link></Navtwo>
           <Navthree>Stories</Navthree>
        </Headertitles>

           <HeaderSearch>
        
                     <HeaderSearchInput type="text" placeholder='Search Brands Here'/>
                     <HeaderInputIchonContainer>
                     <SearchIcon/>
                </HeaderInputIchonContainer>
           </HeaderSearch> 

           <HeaderButton>
              <LoginBtn>Login</LoginBtn>
           </HeaderButton>

           <HeaderCart>
            <CartCount>{cart.length}</CartCount>
            <ShoppingCartOutlinedIcon fontSize='large'/>
           </HeaderCart>

           {/* <HeaderAvatar>
            <AccountCircleOutlinedIcon fontSize='large'/>
           </HeaderAvatar> */}

           <HeaderProfile>
            <Profile/>
           </HeaderProfile>
           
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
position: sticky;
top: 0;
left: 0;
`

const HeaderLogo = styled.div`
    color: black;
    display:flex;
    flex-direction:column;
  margin-left:55px;
    margin-top:20px; 
    text-decoration: none;

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
             /* -webkit-background-clip: text;  */
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

   .linwk{
      color: white;
      text-decoration: none;
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


const HeaderSearch = styled.div`
   display: flex;
   background-color: white;
   height:35px;
   flex-grow: 1;
   margin-top:27px;
    max-width:400px; 
   border-radius:1px;
   margin-left: 4px;
   overflow:hidden;

   /* :focus-within{
    box-shadow: 0 0 0 3px rgb(19, 133, 168);
   } */
`

const HeaderSearchInput = styled.input`
   flex-grow: 1;
   border:0;
   margin-left: 5px;
   font-size: 18px;
  
    :focus {
        outline: none;
    }
   
`

const HeaderInputIchonContainer = styled.div`
       width: 40px;
       height: 55px;
       margin-top:5px;
       color: rgb(2,0,36);
       cursor: pointer;
`

const HeaderButton = styled.div`
    margin-left: 30px;
    margin-top: 25px;
 
   
`

const LoginBtn = styled.button`
 width: 150px;
 height: 37px;
 font-size:22px;
 color: rgb(2,0,36);
 border-radius: 5px;
 font-family: Verdana, Arial, Helvetica, sans-serif;
 cursor:pointer;
 :hover{
   background-color: darkslategray; 
  color: white;
  transition: 0.8s ease-in-out;
 }
`


const HeaderCart = styled.div `
    color: white;
    display: flex;
    flex-direction: column;
    margin-left:26px;
    margin-top:3px;
`

const CartCount = styled.div`
margin-left: 11px;
font-size: 21px;
margin-bottom:-6px;
font-family: cursive;
`

// const HeaderAvatar = styled.div`
//      color: white;
//      margin-left: 25px;
//      margin-top: 20px;
//      cursor: pointer;
// `

const HeaderProfile = styled.div`
    margin-top: 12px;
   margin-left: 5px;

`



