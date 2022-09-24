import React from 'react'
import styled from 'styled-components';

function Rigester() {
  return (
    <Container>
    <LoginForm>
       <First>
       <Label>Name</Label>
       <InputBox type="text"></InputBox>
       </First>
       <First>
       <Label>Email</Label>
       <InputBox type="text"></InputBox>
       </First>
       <First>
       <Label>Password</Label>
       <InputBox type="password" name="pass"></InputBox>
       </First>
       <Button>Continue</Button>
    </LoginForm>
  </Container>
  )
}

export default Rigester;

const Container = styled.div`
 margin-right:210px;
 color: white;
 margin-top: -7px;
 /* height: 120px; */
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
 border-bottom: 3px solid white; 
  /* margin-left: 190px; */
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 19px;

`

const Button = styled.button`
    font-size: 22px;
    text-align: center;
    justify-content: center;
    border: none;
    outline: none;
    background: none;
    border: 5px solid whitesmoke;
    /* background:  linear-gradient(to right, #ed8034 0%,#ed8034 33%,#feb123 33%,#feb123 66%,#2184cd 66%,#2184cd 100%); */
    font-family: Arial, Helvetica, sans-serif;
    width: 150px;
    color: white;
    cursor: pointer;
    margin-top: 5px;
`
