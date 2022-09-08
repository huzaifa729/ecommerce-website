import React from 'react';
import styled from 'styled-components';
import { useStateValue } from './StateProvider';

function Product9({id,img,title,price,info,cutprice}) {

    const [{cart},dispatch] = useStateValue('');

    const addtocart = () =>{
        dispatch({
            type:"ADD_TO_CART",
            item:{
                id:id,
                img:img,
                title:title,
                price:price,
                info:info,
                cutprice:cutprice,
            }
        })
    }
  return (
    <Container>
    <Products>
    <Imags>
         <img src={img}/>
       </Imags>
       <Title>{title}</Title>
       <Info>{info}</Info>
       <Priceoff>
         <Price>₹{price}</Price>
         <Cutprice>₹{cutprice}</Cutprice>
       </Priceoff>
      <Button onClick={addtocart}>
        Shop now
      </Button>
    </Products>
    </Container>
  )
}

export default Product9;

const Container = styled.div`
 margin-top: 40px;
 margin-left: 40px;
`

const Products = styled.div`
   display: flex;
   flex-direction: column;
margin-bottom: 7px;
`

const Imags = styled.div`
   img{
    width: 270px;
    object-fit: cover;
    border-radius: 16px;
    height: 150px;
   }
`

const Title = styled.div`
color: white;
margin-left: 7px;
margin-top: 10px;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
letter-spacing: 0.5px;
`

const Priceoff = styled.div`
  display: flex;
  margin-left: 7px;
margin-top: 10px;
`

const Info = styled.div`
color: white;
margin-left: 7px;
margin-top: 8px;
font-size: 19px;
font-family: Arial, Helvetica, sans-serif;
letter-spacing: 0.7px;
max-width: 280px;
`

const Price = styled.div`
color: white;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
font-size: 18px;

`

const Cutprice = styled.div`
color: grey;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
font-size: 18px;
text-decoration: line-through;
margin-left: 10px;
`

const Button = styled.button`
    border: 2px solid rgb(130, 65, 255);
    border-radius: 7px;
    background: none;
    color: white;
    font-size: 19px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    width: 170px;
    margin-top: 7px;
`