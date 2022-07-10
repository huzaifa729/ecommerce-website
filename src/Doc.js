import React from 'react'
import styled from 'styled-components';

function Doc() {
  return (
      <Container>
            <Flex>
                <FirstGift>
                    <img src="https://www.tatadigital.com/content/dam/tcp/channels/assets/homepage/icons-final/desktopicons/OZ.png" alt='Gift'/>
                    <Paraone>Offers & Super Savers</Paraone>
                    <Paratwo>Deals on your favorite brands</Paratwo>
                    <Parathree>View offers</Parathree>
                </FirstGift>

                <FirstGift>
                    <img src="https://www.tatadigital.com/content/dam/tcp/channels/assets/homepage/icons-final/desktopicons/Umag.png" alt='Stoories'/>
                    <Paraone>Stories</Paraone>
                    <Paratwo>Curated reads & videos for you</Paratwo>
                    <Parathree>Explore</Parathree>
                </FirstGift>

                <FirstGift>
                    <img src="https://www.tatadigital.com/content/dam/tcp/channels/assets/homepage/icons-final/desktopicons/BillPay.png" alt='pay'/>
                    <Paraone>Bill Payments</Paraone>
                    <Paratwo>Safe and quick way to manage your bills</Paratwo>
                    <Parathree>Pay Bills</Parathree>
                </FirstGift>

                <FirstGift>
                    <img src="https://www.tatadigital.com/content/dam/tcp/channels/assets/homepage/icons-final/desktopicons/Finance.png" alt='Gift'/>
                    <Paraone>Finance</Paraone>
                    <Paratwo>Qik EMI, Insurance and Loans</Paratwo>
                    <Parathree>Know More</Parathree>
                </FirstGift>
            </Flex>
      </Container>
  )
}

export default Doc;

const Container = styled.div`
   margin: auto;
   max-width:950px;
   padding-top:40px;
`

const Flex = styled.div`
    display:flex;

`

const FirstGift = styled.div`
   display:flex;
   flex-direction:column;
   color: white;
  margin-left: 17px;
    img{
        width: 105px;
        margin-left:12px;
        padding-bottom:16px;
    }
`


const Paraone = styled.div`
  margin-left:20px;
  font-size:20px;
  font-family: Verdana, Arial, Helvetica, sans-serif; 
  max-width:200px;
   margin-top:5px;
`

const Paratwo = styled.div`
  margin-left:20px;
  margin-top:12px;
  font-size:18px;
  font-family: Verdana, Arial, Helvetica, sans-serif; 
  max-width:250px;
`

const Parathree = styled.div`
  margin-left:22px;
  margin-top:12px;
  font-size:17px;
  text-decoration:underline;
  font-family: Verdana, Arial, Helvetica, sans-serif; 
`