
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

   <AllLogin>
   <SocialAccount>
       <Google>
        <Button>
        <img className="goggle-logo" src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/google-icon.5c764c55.svg" alt="Google Logo"/>
        </Button>
       </Google>

       <Twitter>
        <Button>
        <img className="twitter-logo" src="https://cdn-icons-png.flaticon.com/128/747/747622.png?ga=GA1.2.936411358.1657092341" alt="twitter"/>
       </Button>
       </Twitter>

       <Github>
        <Button>
        <img className="github-logo" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github Logo"/>
        </Button>
       </Github>
   </SocialAccount>

    <Socialbtn>

    <Facebook>
        <Button>
        <img className="github-logo" src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-thumb.png" alt="facebook Logo"/>
        </Button>
       </Facebook>

       <Instagram>
        <Button>
        <img className="github-logo" src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-tumb.png" alt="Instagram Logo"/>
        </Button>
       </Instagram>

    </Socialbtn>
   </AllLogin>

   <Endline>
      <New>New to D-Shop? Create an account</New>
   </Endline>
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
  border-bottom: 3px solid whitesmoke;
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
    width: 29%;
    /* background-color: #2a405b; */
    background:  linear-gradient(to right, #ed8034 0%,#ed8034 33%,#feb123 33%,#feb123 66%,#2184cd 66%,#2184cd 100%);
    position: relative;
    vertical-align: middle; 
     left: -20px; 
   }

   ::after{
    content: "";
    width: 29%;
    height: 3px;
    /* background-color: #2a405b; */
    background:  linear-gradient(to right, #ed8034 0%,#ed8034 33%,#feb123 33%,#feb123 66%,#2184cd 66%,#2184cd 100%);
    position: relative;
    display: inline-block;
    vertical-align: middle;
    left: 25px;
   }
`

const AllLogin = styled.div`
 margin-top: 5px;
`

const SocialAccount = styled.div`
 display: flex;
 /* flex-direction: column; */
 margin-top: 20px;
 text-align: center;
 /* justify-content: center; */
 margin-right: 60px;
 justify-content: space-around;
`

const Google = styled.div`
 margin-bottom: 15px;
 margin-left: 25px;
`
const Twitter = styled.div`
 margin-bottom: 15px;
 margin-left: 25px;
`

const Github = styled.div`
 margin-bottom: 15px;
 margin-left: 25px;
`

const Button = styled.button`

width: 127%;
    height: 48px;
    /* background-color: #2a405b; */
    /* background:  linear-gradient(to right, #ed8034 0%,#ed8034 33%,#feb123 33%,#feb123 66%,#2184cd 66%,#2184cd 100%); */
    border-radius: 5px;
   margin: 0px 12px;
   background: none;
  cursor: pointer;
  img{
    width: 30px;
  }
`


const Socialbtn = styled.div`
 display: flex;
 margin-left: 5px;
`


const Instagram = styled.div`
 margin-bottom: 15px;
 margin-left: 35px;

 img{
  width: 50px;

 }
`

const Facebook = styled.div`
 margin-bottom: 15px;
 margin-left: 2px;

 img{
  width: 50px;

 }
`


const Endline = styled.div`
  color: white;
  margin-top: 5px;
`

const New = styled.div`
 font-size: 19px;
 font-family: Arial, Helvetica, sans-serif;
`


