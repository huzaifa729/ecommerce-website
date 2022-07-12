import React from 'react'
import styled from 'styled-components'

function Slides() {
  return (
    <Container>
        <Slidess>TRENDING IN ACCESSORIES</Slidess>
        <STORES>
            <Img3>
            <img src='https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/eedc6c0c-c28b-4ccb-952f-a302c96c59ba1598030134978-Content-mostselling-Sportswear-Nikerevolution.jpeg'/>

            <img src='https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/4aa58fe6-8c61-4e37-9fa8-436c31aecb211597840566511-Content-sportswear-essentials-activewear.png'/>

            <img src='https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/647e166b-f645-443a-892d-df84ee345e781595935221231-Content-Footwear-men-Neutral-shades.jpg'/>

            <img src='https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9654b0f9-42a9-4111-a4b7-27b26c5a22d41595935221284-Content-Footwear-Unisex-Sneakers-for-Dancers_.jpg'/>
            </Img3>

            <Img3>
            <img src='https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/h_280,q_90,w_210/v1/assets/images/2466431/2019/2/5/97397bf5-d7dd-44b6-b860-db9255cc71c71549348679710-Daniel-Klein-Premium-Men-Black-Analogue-Watch-DK11599-5-1081-1.jpg'/>

            <img src='https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9e4fb95e-6268-49c5-9ed1-e6b1bd4b5efd1595935030880-Content-ethnicwear-trend-fashionmeetcomfort.jpg'/>

            <img src='https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/4dbcc869-ba34-43df-8348-56c7816363c41597840218100-Content-accessories-trend-handcraftedjewel.png'/>

            <img src='https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/225f77f5-c299-4849-8586-3ed41b70b1f91597840217917-Content-accessories-brand-imittire.png'/>
            </Img3>
        </STORES>
    </Container>
  )
}

export default Slides;

const Container = styled.div`
    margin-top: 25px;
    margin-left: 20px;
`

const Slidess = styled.div`
     color: white;
     font-size: 30px;
     font-family: Verdana, Geneva, Tahoma, sans-serif;
     text-align: center;
     justify-content: center;
     letter-spacing: 1px;
     text-transform: uppercase;
`

const STORES = styled.div`
 display: flex;
 margin-top: 30px;
 margin-left: 25px;
 

`

const Img3 = styled.div`
   
   img{
    width: 100px;
    margin:2px 14px;
    background-color: black;
   }
`