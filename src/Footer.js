import React from 'react'
import styled from 'styled-components';

function Footer() {
  return (
     <Container>
           <Flexible>
               <One>Trade Alert - Delivering the latest product trends and industry news straight to your inbox.</One>
              
              <Fl>
                 <Emails type="text" placeholder="Your email"></Emails>
                 <Butn>Subscribe</Butn>
              </Fl>

              <Para>We’ll never share your email address with a third-party.</Para>
           </Flexible>


           <Footers>
              <Row>
                   <Next>
                       <H1>Customer Services</H1>

                       <Down>
                          <Li>Help Center</Li>
                          <Li>Report Abuse</Li>
                          <Li>Submit a Dispute</Li>
                          <Li>Policies & Rules</Li>
                          <Li>Get Paid for Your Feedback</Li>
                       </Down>
                   </Next>

                   <Next>
                       <H1>About Us</H1>

                       <Down>
                          <Li>About D-Shop.com</Li>
                          <Li>About D-Shop Group</Li>
                          <Li>Sitemap</Li>
                          <Li>Alibaba.com Blog</Li>
                       </Down>
                   </Next>

                   
                   <Next>
                       <H1>Source on D-Shop.com</H1>

                       <Down>
                          <Li>Resources</Li>
                          <Li>All Categories</Li>
                          <Li>Request for Quotation</Li>
                          <Li>Ready to Ship</Li>
                          <Li>Buyer Partners</Li>
                          <Li>D-Shop.com Select</Li>
                       </Down>
                   </Next>

                   
                   <Next>
                       <H1>Trade Services</H1>

                       <Down>
                          <Li>Trade Assurance</Li>
                          <Li>Business Identity</Li>
                          <Li>Logistics Service</Li>
                          <Li>Production Monitoring </Li>
                          <Li>Letter of Credit</Li>
                       </Down>
                   </Next>
              </Row>
              <Line></Line>
           </Footers>
     </Container>
  )
}

export default Footer;

const Container = styled.div`
  margin-top:40px;
  margin-left:30px;
  height: 700px;
`


const Flexible = styled.div`
   display: flex;
   flex-direction:column;
   text-align: center;
   justify-content: center;
`

const One = styled.div`
    font-size:20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color:white;
    margin-bottom: 10px;
`

const Fl = styled.div`
    display: flex;
    text-align: center;
   justify-content: center;
   margin-top: 20px;
`

const Emails = styled.input`
  font-size: 20px;
  background: none;
  border: 1px solid #c4c4c4;
 padding:7px 8px;
 color: white;
 margin-left:2px;
`

const Butn = styled.button`
   color: whitesmoke;
   margin-left:13px;
   background:none;
   border: 1px solid #c4c4c4;
   padding:7px 8px;
   width: 150px;
   font-size:20px;
`

const Para = styled.div`
  margin-top:7px;
  color: white;
  margin-left:-152px;
  font-size:11px;
`


const Footers = styled.div`
   margin-top:30px;
   margin-left:35px;
`

const Row = styled.div`
   display: flex;
   margin-left:75px;  
   margin-top: 52px;
`

const Next = styled.div`
     color:white;
     padding:3px 27px;
     text-align:center;
   justify-content: center; 
`

const H1 = styled.div`
  font-size:22px;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  margin-bottom:14px;
`

const Down = styled.div`

   margin-left:1px;
`

const Li = styled.div`
  font-size:18px;
  padding: 5px;
  font-family:Arial, Helvetica, sans-serif;
`

const Line = styled.div`
  background-color: whitesmoke;
  width: 92%;
  height: 1px;
  margin-top: 20px;
  margin-left: 35px;
`
