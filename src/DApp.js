import React from 'react'
import styled from 'styled-components';

function DApp() {
  return (
    <Container>
        <Row>
            <Images>
                 <img src="https://hm.imimg.com/imhome_gifs/app-img.png" alt="u"/>
            </Images>

            <Info>
                 <DTit>Get D-Shop App</DTit>
                 <SPAN>Search for products/services and connect with verified sellers on the go!</SPAN>

                 <Mobile>
                    <Label>+91</Label>
                    <Email type="text" placeholder='Enter your mobile number' id="mobile" autoComplete='off'></Email>
                     <Btn>Send me the link</Btn>
                 </Mobile>
                 <Send>We will send you a link, open it on your phone to download the App</Send>

                 <AppDownload>
                     <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt='app'/>

                     <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl' alt='goo'/>
                 </AppDownload>
            </Info>
        </Row>
    </Container>
  )
}

export default DApp;

const Container = styled.div`
  margin-top: 20px;
  margin-left:30px;
`;

const Row = styled.div`
    display: flex;
    margin-left:23px;
`;

const Images = styled.div`
     margin-top:35px;
     margin-left:45px;

     img{
        max-width: 300px;
        object-fit: contain;
     }
`


const Info = styled.div`
  color: whitesmoke;
  margin-top:80px;
  margin-left:70px;
`

const DTit = styled.div`
   font-size: 27px;
   font-family: Arial,"Helvetica Neue",Helvetica,sans-serif;
   margin-bottom:7px;
   color: #444;
   font-weight:700;
`

const SPAN = styled.div`
font-size:20px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
max-width:670px;
color: #444;
font-weight:400;
`


const Mobile = styled.div`
 display: flex;
 margin-top:25px;
 text-align:center;
`

const Label = styled.div`
      border: 1px solid #c4c4c4;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 7px 5px;
    color: #444;
    font-weight: 700;
    font-size:20px;
    
`

const Email = styled.input`
  background:none;
  border:none;
  border: 1px solid #c4c4c4;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 10px 5px;
    color: #444;
    font-weight: 700;
    font-size:20px;
   
`

const Btn = styled.button`
margin-left:12px;
  width:125px;
  border-radius:5px;
  border: 1px solid #c4c4c4;
  background:none;
  color: #444;
  font-size:15px;
  font-weight: 600;
  cursor: pointer;
`



const Send = styled.div`
  margin-top:22px;
  color: #444;
  font-size:22px;
  font-family: Arial,"Helvetica Neue",Helvetica,sans-serif;
`

const AppDownload = styled.div`
  margin-top: 34px;
  /* padding: 3px 21px; */

    img{
        max-width:150px;
        object-fit: contain;
        padding: 3px 21px;
    }
`
