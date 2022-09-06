
import React from 'react'
import styled from 'styled-components';

function Product4() {
  return (
    <Container>
        <Heading>
        No Offers found in this section, please try other sections
        </Heading>
       </Container>
  )
}

export default Product4;

const Container = styled.div`

`

const Heading = styled.div`
  color: white;
  margin-left: 270px;
  margin-top: 25px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
`