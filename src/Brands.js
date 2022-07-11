import React from 'react'
import styled from 'styled-components';

function Brands() {
  return (
      <Container>
          <Brand>
             <Titles>Top Brands</Titles>
 
            <TopBrand>
                  <Image>
                      <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/29/ce08579d-0808-4981-bea1-dd6d0b32e27b1624982345699-Puma.jpg" alt="img"/>

                      <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/29/ce08579d-0808-4981-bea1-dd6d0b32e27b1624982345699-Puma.jpg" alt="img"/>

                      <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/29/ce08579d-0808-4981-bea1-dd6d0b32e27b1624982345699-Puma.jpg" alt="img"/>

                      <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/29/ce08579d-0808-4981-bea1-dd6d0b32e27b1624982345699-Puma.jpg" alt="img"/>
                  </Image>
            </TopBrand>
              
          </Brand>
      </Container>
  )
}

export default Brands;

const Container = styled.div`
  margin-top:35px;
  margin-left:35px;
  height:600px;
`

const Brand = styled.div`
   display:flex;
   flex-direction: column;
`

const Titles = styled.div`
  color: white;
  font-size:25px;
  margin-left:2pc;
  margin-top:2pc;
`


const TopBrand = styled.div`
  margin-top:25px;
  margin-left:10px;
`

const Image = styled.div`
   display: flex;
     padding:3px 21px;
   img{
    width:100px;
    padding:3px 21px;
   }
`