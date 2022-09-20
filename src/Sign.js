import React from 'react'
import styled from 'styled-components';

function Sign() {
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
     </LoginForm>
   </Container>
  )
}

export default Sign;


const Container = styled.div`
 margin-right:210px;
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
