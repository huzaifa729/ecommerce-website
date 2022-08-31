import React from 'react';
import styled from 'styled-components';


function Offers() {
  return (
   <Container>

<Banner>
  <img src='https://www.tatadigital.com/v2/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fnc2ghyne%2Fproduction%2F58057920ed6dcd1e08e6febc6d857329cfba878d-1000x500.jpg&w=750&q=75'/>
</Banner>

<AllCaptured>

  <Filter>
  Filter by category
  </Filter>


  <AllFasion>

  </AllFasion>

</AllCaptured>

   </Container>
  )
}

export default Offers;


const Container = styled.div`
`;

const Banner = styled.div`
text-align: center;
justify-content: center;
margin-top: 40px;


img{
  width: 890px;
  object-fit: contain;
  /* padding: 15px 26px; */
  border: 15px solid black;
}
`

const AllCaptured = styled.div`

`;

const Filter = styled.div`
  margin-top: 40px;
  margin-left: 100px;
  font-size: 35px;
  font-family: Arial, Helvetica, sans-serif;
  color: bisque;
  letter-spacing: 0.6px;
`

const AllFasion = styled.div`

`


