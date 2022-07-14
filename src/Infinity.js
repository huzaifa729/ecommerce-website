import React from 'react'
import styled from 'styled-components';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
function Infinity() {
  return (
      <Container>
            <InfinityTitle>More for You</InfinityTitle>
            <Collect>
                <First>
                <Item> <ThumbUpOutlinedIcon fontSize='large'/></Item>
                     <Head1>Connect with verified sellers</Head1>
                     <Head2>Tell us your requirement & let our experts find verified sellers for you</Head2>
                     <Headbtn>Get verified sellers</Headbtn>
                </First>
                  <Ban></Ban>
                <First>
                <Item> <CurrencyRupeeIcon fontSize='large'/></Item>
                     <Head1>Pay with IndiaMART</Head1>
                     <Head2>Protect your payments for FREE. Pay sellers online via multiple options</Head2>
                     <Headbtn>Know More</Headbtn>
                </First>
                <Ban></Ban>
                <First>
                <Item> <AddBusinessOutlinedIcon fontSize='large'/></Item>
                     <Head1>Sell on D-Shop for free</Head1>
                     <Head2>Reach out to more than 4 crore buyers.
                        Sell with us.</Head2>
                     <Headbtn>Start Selling</Headbtn>
                </First>
                <Ban></Ban>
                <First>
                <Item> <SmartphoneOutlinedIcon fontSize='large'/></Item>
                     <Head1>Download our App</Head1>
                     <Head2>Get instant notifications on the go. Download our App Now</Head2>
                     <Headbtn>Download Now</Headbtn>
                </First>
            </Collect>
      </Container>
  )
}

export default Infinity;

const Container = styled.div`
     margin-top: 50px;
     color: white;
     margin-left: 25px;
`

const InfinityTitle = styled.div`
    font-size:30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const Collect = styled.div`
  margin-left:35px;
  margin-top:15px;
  display:flex;

  max-width:1250px;
`

const First = styled.div`
    /* display:flex;
   flex-direction:column;  */
   padding:3px 12px;
   text-align:center;
   justify-content:center;
  
`
const Item = styled.div`
   text-align:center;
   justify-content:center;
   color: #2874f0;
   margin-bottom:10px;
`

const Head1 = styled.div`
   text-align:center;
   justify-content:center;
   font-size:20px;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
   margin-bottom:10px;
`

const Head2 = styled.div`
  text-align:center;
   justify-content:center;
   font-size:13px;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
   margin-bottom:10px;
`
const Headbtn = styled.button`
  /* text-align:center;
   justify-content:center; */
    background:none;
    color:white;
    border: 5px solid white;
    font-size: 18px;
    width:190px;
    height:40px;
    /* margin-left:50px; */
 

`

const Ban = styled.div`
    /* background-color: rgb(29, 28, 28); */
    background-color:white;
   width:2px;
   height:145px;
    margin-top:10px;
`