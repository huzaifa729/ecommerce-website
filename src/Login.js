import React from 'react'
import styled from 'styled-components';


function Login() {
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
                 <Google>

                 <img className="goggle-logo" src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/google-icon.5c764c55.svg" alt="Google Logo"/>
                    <GP>Google</GP>
                 </Google>

                 <Facebook>

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

    <Foot>Copyright © 1995-2022 D-shop Inc. All Rights Reserved. Accessibility, User Agreement, Privacy, Cookies, Do not sell my personal information and AdChoice
Norton Secured - powered by DigiCert.</Foot>

    </Container>
  
  )
}

export default Login;

const Container = styled.div`
`;

const HeaderLogo = styled.div`
    color: black;
    display:flex;
    flex-direction:column;
  margin-left:55px;
    margin-top:10px; 

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

const LoginCenter = styled.div`
        text-align:center;
        align-items:center;
        margin-top:5px;
`

const LoginTitle = styled.div`
     color:white;
     font-size:45px;
     font-family:Arial, Helvetica, sans-serif;
     letter-spacing:7px;
     text-decoration:underline;
`

const LoginPara = styled.div`
  color:white;
  font-size:27px;
  font-family:Arial, Helvetica, sans-serif;
  margin-top:12px;
  letter-spacing:0.7px;
`

const LoginPage = styled.div`
         outline: none;
    color: #fff;
    border: 1px solid #2a405b;
    background-color: #1c2a3b;
   padding: 00px 6px;

    width: 25%;
    height: 340px;
    font-size: 16px;
    border-radius: 3px;
    margin:auto;
    margin-top:50px;
`


const LName = styled.div`
  color:white;
  font-size:24px;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top:10px;
  margin-left:10px;
  text-decoration:underline;
`


const SignWith = styled.div`
  margin-top: 20px; 
  margin-left: 10px;
  text-align: center;
  font-size: 18px;
  /* color: #5b728c; */
  color:white;
  font-weight: 540;
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
 background-color: #2a405b;
 width:150px;
 height:41px;
 border-radius:5px;
 display:flex;
 align-items:center;

 cursor: pointer;
   img{
    height:28px;
    margin-left:6px;
    margin-top:0px;
   }

  
`

const Facebook = styled.button`
 background-color: #2a405b;
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
 background-color: #2a405b;
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
 background-color: #2a405b;
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
 font-size:20px;
 font-family: Verdana, Geneva, Tahoma, sans-serif;
 margin-left:7px;
 color:whitesmoke;
 margin-top:2px;


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
  background-color: #2a405b;
  margin-top:22px;
`

const Foot = styled.div`
   color:white;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
   font-size:19px;
   text-align:center;
   justify-content:center;
   margin-top:12px;
  margin-left:5px;
`


const Create = styled.div`
   margin-top:12px;
`
const Account = styled.div`
  font-size:18px;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
`


