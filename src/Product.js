import React from 'react'

function Product({id,img,title,price,info}) {
  return (
  <Container>
       <Imgs>
          {img}
       </Imgs>
  </Container>
  )
}

export default Product