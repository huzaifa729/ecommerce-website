import React from 'react'
import styled from 'styled-components'
function AllProduct() {
  return (
      <Container>
         <Product>

              <TProducts>
               <Grocery>
                   <Lineone>Grocery</Lineone>
               </Grocery>

               <Grocery>
                   <Lineone>Grocery</Lineone>
               </Grocery>

               <Grocery>
                   <Lineone>Grocery</Lineone>
               </Grocery>

               <Grocery>
                   <Lineone>Grocery</Lineone>
               </Grocery>

               </TProducts>

              

         </Product>

      

      
      </Container>
  )
}

export default AllProduct;

const Container = styled.div`
   color: white;
   padding-top: 54px;
   height: 1600px;
   max-width:1000px;
   margin: auto;
`

const Product = styled.div`
  
   margin: 20px 15px 10px 15px;

`

const TProducts = styled.div`
 display: flex;
 cursor: pointer;

`

const Grocery = styled.div`
  background-image: url('https://www.tatadigital.com/content/dam/tcp/channels/assets/homepage/4xshophp_tiles_29dec/desktop/Groceriesimage_pc.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 105px;
    width: 184px;
object-fit: contain;
margin: 24px 0px 0px 32px;

`

const Lineone = styled.div`
margin-left: 7px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
margin-top: 3px;
font-size: 19px;
`