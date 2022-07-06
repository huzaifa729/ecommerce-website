import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
      <Container>
           <Title>
            Logo
           </Title>
      </Container>
  )
}

export default Header

const Container = styled.div`
   background-color: red;
   height:500px;
`

const Title = styled.div`
    color: black;
`
