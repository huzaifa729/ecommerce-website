import React from 'react'
import styled from 'styled-components';

function Sign() {
  return (
    <Signn>
    <Container>
     <LoginForm>
        <First>
        <Label>Email</Label>
        <InputBox type="text"></InputBox>
        </First>
        <First>
        <Label>Password</Label>
        <InputBox type="password" name="pass"></InputBox>
        </First>
     </LoginForm>
   </Container>
   <SignWith>Sign up with</SignWith>
   <SocialAccount>
       <Google>
        <Button>
        <img className="goggle-logo" src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/google-icon.5c764c55.svg" alt="Google Logo"/>
    
        </Button>
       </Google>

       <Google>
        <Button>
        <img className="twitter-logo" src="https://cdn-icons-png.flaticon.com/128/747/747622.png?ga=GA1.2.936411358.1657092341" alt="twitter"/>
      
        </Button>
       </Google>

       <Google>
        <Button>
        <img className="github-logo" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github Logo"/>
        </Button>
       </Google>
   </SocialAccount>
   </Signn>
  )
}

export default Sign;

const Signn = styled.div`

`

const Container = styled.div`
 margin-right:200px;
 color: white;
 margin-top: -7px;
`
const LoginForm = styled.div`
   display: flex;
  flex-direction: column; 
`

const First = styled.div`
display: block;
flex-direction: column;
margin-bottom: 30px;
`

const Label = styled.div`
 color: white;
 font-family: Arial, Helvetica, sans-serif;
 font-size: 21px;
 letter-spacing: 0.1px;
 margin-bottom: 3px;
`

const InputBox = styled.input`
  border: none;
  outline: none;
  background: none;
  width: 250px;
  border-bottom: 3px solid grey;
  /* margin-left: 190px; */
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 19px;
`

const SignWith = styled.div`
   color:white;
   text-align: center;
   font-size: 20px;
   font-family: Arial, Helvetica, sans-serif;
   justify-content:center;

   ::before{
    content: "";
display: inline-block;
    height: 3px;
    width: 27%;
    background-color: #2a405b;
    position: relative;
    vertical-align: middle; 
     left: -20px; 
   }

   ::after{
    content: "";
    width: 27%;
    height: 3px;
    background-color: #2a405b;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    left: 25px;
   }
`

const SocialAccount = styled.div`
 display: flex;
 /* flex-direction: column; */
 margin-top: 20px;
 text-align: center;
 /* justify-content: center; */
 margin-right: 45px;
 justify-content: space-around;
`

const Google = styled.div`
 margin-bottom: 15px;
 margin-left: 25px;
`

const Button = styled.button`

width: 127%;
    height: 48px;
    background-color: #2a405b;
    border-radius: 5px;
   margin: 0px 12px;
   
  cursor: pointer;
  img{
    width: 30px;
  }
`



