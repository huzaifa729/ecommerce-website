
import React from 'react'
import styled from 'styled-components';
import { auth, facebookProvider, googleProvider } from "./firebase";
import { selectUser } from "./features/userSlice";


function Login() {


  const handleGoogle = () => {
    auth.signInWithPopup(googleProvider);
  };

  const handleFacebook = () => {
    auth.signInWithPopup(facebookProvider);
  };

  return (
     
    <Container>
            <HeaderLogo>
          <Title>D-SHOP</Title>
          <img src="https://cdn.pixabay.com/photo/2012/04/11/17/58/arrow-29170__340.png"/>
        </HeaderLogo>



      <LoginCenter>

        <LoginTitle>Hello</LoginTitle>
        <LoginPara>Sign in to D-shop</LoginPara>
        </LoginCenter>


        <LoginPage>
             <LName>Login</LName>
             
             <SignWith>Sign up with</SignWith>

             <LoginBtns>
                 <Google onClick={handleGoogle}>

                 <img className="goggle-logo" src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/google-icon.5c764c55.svg" alt="Google Logo"/>
                    <GP>Google</GP>
                 </Google>

                 <Facebook onClick={handleFacebook}>

                 <img className="facebook-img"
             src="https://img.icons8.com/fluency/2x/facebook-new.png" alt="facebook"/>

                <FP>Facebook</FP>
                 
                 </Facebook>

                 <Twitter>

                 <img className="twitter-logo" src="https://cdn-icons-png.flaticon.com/128/747/747622.png?ga=GA1.2.936411358.1657092341" alt="twitter"/>
                   
                   <TP>Twitter</TP>

                 </Twitter>

                 <Github>

                 <img className="github-logo" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github Logo"/>
                
                <GP>Github</GP>

                 </Github>

               <Create>
                  <Account>New to D-Shop? Create an account</Account>
               </Create>
                
             </LoginBtns>

        </LoginPage>
        <Line></Line>

    <Foot>Copyright © 1995-2022 D-shop Inc. All Rights Reserved. </Foot>

    </Container>
  
  )
}

export default Login;

const Container = styled.div`
      /* background-image: url("https://png.pngtree.com/thumb_back/fh260/background/20210224/pngtree-blue-abstract-background-business-image_564246.jpg");  */
    /* background-image: url("https://wallpaper.dog/large/10824481.jpg"); */
    background-image: url("https://t3.ftcdn.net/jpg/01/91/78/32/360_F_191783282_0TVrx5VrvrkpDHSKdjjI87HkbXJy5TMw.jpg");
     color:black;
     height: 656px;
     background-position: center;
     background-size: cover;
  
`;

const HeaderLogo = styled.div`
   color:white;
    display:flex;
    flex-direction:column;
  margin-left:55px;
    margin-top:1px; 

    img{
       margin-left:30px;
     max-width:55px;
      object-fit:contain;
     margin-top:-4px;
    }
`

 const Title = styled.span`
     font-weight: 800;
     font-size:77px;
  font-family: 'Qwitcher Grypen', cursive; 
     background: rgb(123,136,136);
background: linear-gradient(0deg, rgba(123,136,136,1) 0%, rgba(0,0,0,1) 100%);
            -webkit-text-fill-color: transparent;
              -webkit-background-clip: text; 
              -webkit-background-clip: text;  
              text-shadow: 2px 2px;
              color:whitesmoke;
               margin-top: 10px;
           /* color:white; */
        
`

const LoginCenter = styled.div`
        text-align:center;
        align-items:center;
        margin-top:-90px;
`

const LoginTitle = styled.div`
     color:whitesmoke;
     font-size:65px;
     font-family: 'Qwitcher Grypen', cursive;
     letter-spacing:7px;
     text-decoration:underline;
      font-weight: 700;
`

const LoginPara = styled.div`
  color:whitesmoke;
  font-size:77px;
  font-family: 'Qwitcher Grypen', cursive;
  margin-top:-18px;
  letter-spacing:0.7px;
  font-weight: 700;
`

const LoginPage = styled.div`
         outline: none;
    // color: #fff;
    // border: 1px solid #2a405b;
    // background-color: #1c2a3b;
   padding: 00px 6px;
   color:whitesmoke;
    width: 25%;
    height: 340px;
    font-size: 16px;
    border-radius: 3px;
    margin:auto;
    margin-top:-35px;
`


const LName = styled.div`
 color:whitesmoke;
   /* font-size: 40px; */
  margin-top:33px;
  margin-left:10px;
  text-decoration:underline;
  font-weight: 700;
  font-size:35px;
  font-style: italic;
   /* text-align: center;
  justify-content: center;  */
`


const SignWith = styled.div`
  margin-top: 20px; 
  margin-left: 10px;
  text-align: center;
  font-size: 20px;
  /* color: #5b728c; */
  color:whitesmoke;
  font-weight: 500;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

   ::before{
    content: "";
display: inline-block;
    height: 3px;
    width: 27%;
     background-color: #2a405b; 
    position: relative;
   vertical-align: middle;
    left: -15px;
   }

   ::after{
    content: "";
     display: inline-block; 
    height: 3px;
    width: 27%;
    background-color: #2a405b;
    vertical-align: middle;
    position: relative;
    left: 15px;
   }
`


const LoginBtns = styled.div`
   margin-top:20px;
   text-align:center;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;

`
const Google = styled.button`
 /* background-color: #2a405b; */
 width:150px;
 height:41px;
 border-radius:5px;
 display:flex;
 align-items:center;
 background: none;
 /* background-color: #2874f0; */
  /* background: rgb(123,136,136);
background: linear-gradient(0deg, rgba(123,136,136,1) 0%, rgba(0,0,0,1) 100%);  */
 cursor: pointer;
   img{
    height:28px;
    margin-left:6px;
    margin-top:0px;

   }

  
`

const Facebook = styled.button`
 /* background-color: #2a405b; */
 background: none;
 /* background: rgb(123,136,136);
background: linear-gradient(0deg, rgba(123,136,136,1) 0%, rgba(0,0,0,1) 100%); */
 width:151px;
 height:41px;
 border-radius:5px;
margin-top:10px;
display:flex;
 align-items:center;
cursor: pointer;
   img{
    height:35px;
    margin-left:2px;
   }
`

const Twitter = styled.button`
 /* background-color: #2a405b; */
 /* background: rgb(123,136,136);
background: linear-gradient(0deg, rgba(123,136,136,1) 0%, rgba(0,0,0,1) 100%); */
  background: none; 
 width:150px;
 height:41px;
 border-radius:5px;
margin-top:10px;
display:flex;
 align-items:center;
cursor: pointer;
   img{
    height:35px;
    background:none;
    margin-left:6px;
   }
`

const Github = styled.button`
 /* background-color: #2a405b; */
 /* background: rgb(123,136,136);
background: linear-gradient(0deg, rgba(123,136,136,1) 0%, rgba(0,0,0,1) 100%); */
  background: none; 
 width:150px;
 height:41px;
 border-radius:5px;
margin-top:10px;
display:flex;
 align-items:center;
cursor: pointer;
   img{
    height:35px;
    background:none;
    margin-left:6px;
   }
`


const GP = styled.div`
 font-size:21px;
 font-family: Verdana, Geneva, Tahoma, sans-serif;
 margin-left:7px;
 color:whitesmoke; 
 margin-top:2px;
font-weight: 525;

`

const FP = styled.div`
 font-size:20px;
 font-family: Verdana, Geneva, Tahoma, sans-serif;
 margin-left:7px;
 color:whitesmoke;
 margin-top:2px;
`

const TP = styled.div`
 font-size:20px;
 font-family: Verdana, Geneva, Tahoma, sans-serif;
 margin-left:7px;
 color:whitesmoke;
 margin-top:2px;
`


const Line = styled.div`
  width:100%;
  height: 2px;
  background-color: black;
  margin-top:55px;
`

const Foot = styled.div`
  color:whitesmoke;
   /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
   font-size:65px;
  font-family: 'Qwitcher Grypen', cursive;
   text-align:center;
   justify-content:center;
   margin-top:12px;
  margin-left:5px;
  font-weight: bolder;
`


const Create = styled.div`
   margin-top:12px;
`
const Account = styled.div`
  font-size:25px;
  /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
  font-style:italic;
 font-weight: 630;
`


