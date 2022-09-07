import React from 'react'
import styled from 'styled-components';

function Product6() {
  return (
    <Container>
        <Topic>No Offers found in this section, please try other sections</Topic>
    </Container>
  )
}

export default Product6;

const Container = styled.div`
margin-top: 25px;
margin-left: 55px;
`

const Topic = styled.div`
 font-size: 25px;
 font-family: Arial, Helvetica, sans-serif;
 color: white;
 margin-left:150px;
 margin-top: 30px;
`