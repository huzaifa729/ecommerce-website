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

                      <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/29/71cb1891-3592-49cc-8a47-3137b63e6c6e1624982345724-U.S.-Polo-Assn..jpg" alt="img"/>

                      <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/29/63a9a6eb-e964-496b-a0ec-579f10938f8e1624982345732-UCB.jpg" alt="img"/>

                      <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/29/910dc2e2-8d6f-454b-891c-e2b51b595e631624981504154-Jack-_-Jones.jpg" alt="img"/>
                  </Image>

                  <Image>
                      <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/29/c3375181-ef34-4496-ad87-ef73c60009441624981504063-Allen-Solly.jpg" alt="img"/>

                      <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/29/9b4b0806-439a-4281-8647-eb7bfc6e195a1624982345638-Louis-Philippe.jpg" alt="img"/>

                      <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/29/b2284365-8bdc-48ad-8567-17ac4fdb6ebd1624982345630-Levis.jpg" alt="img"/>

                      <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/29/eb77ba66-8a68-48b1-8d28-a63c9ff24b2e1624982345716-Tommy-Hilfiger.jpg" alt="img"/>
                  </Image>
            </TopBrand>
          </Brand>

           <BradHim>
               <Tte>Apparel</Tte>
  
         <Flex>
              <IMG> 
                  <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/29/f27ee139-4060-466f-b534-35faff198c4d1624987802723-Arrow.jpg" alt='fff'/>   

                  <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/29/7c03ef1d-de81-474a-a3ed-316396893ecf1624987802795-Peter_England.jpg" alt='lop'/>  

                  <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/29/5a399b5f-f5c1-4b66-a6a9-32730a8e67631624988136274-VH-_Allen_Solly.jpg" alt='lop'/>  

                  <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/29/dc572897-eb26-427d-8b6e-c1256a31ff201624987802767-LP.jpg" alt='lop'/>  
              </IMG>

              </Flex>
           </BradHim>

           <BradHim>
               <Tte>Footwear</Tte>
  
         <Flex>
              <IMG> 
                  <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/29/49c09ffb-8e55-4278-9e5f-3b8585db55081624989811787-HRX.jpg" alt='fff'/>   

                  <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/29/5ef58f21-288a-455b-94ea-bdeff31dda481624989811815-Onitsuka_Tiger.jpg" alt='lop'/>  

                  <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/29/f036c388-b9ad-4973-b915-806e94533d0e1624989811727-Adidas-_Reebok.jpg" alt='lop'/>  

                  <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/29/03005e15-777f-4c9a-8424-f12766c56cb61624989811758-Bata-_Hush_Puppies.jpg" alt='lop'/>  
              </IMG>

              </Flex>
           </BradHim>
           

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
  font-size:35px;
  margin-left:2pc;
  margin-top:2pc;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
`


const TopBrand = styled.div`
  margin-top:5px;
  margin-left:10px;
`

const Image = styled.div`
   display: flex;
     padding:3px 21px;
   img{
    width:270px;
    height: 170px;
    padding:3px 18px;
    /* object-fit:contain; */
    object-fit:contain;
   }
`

const BradHim = styled.div`
   margin-top:20px;
   margin-left:20px;
`

const Tte = styled.div`
  font-size: 30px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-left:1pc;
  margin-top:2pc;
  color: white;
 
`


const Flex = styled.div`
  display: flex;
  flex-direction: column;
`

const IMG = styled.div`
     margin-top: 30px;
     margin-left:40px;

     img{
        width:227px;
        margin:3px 27px;
        object-fit: contain;
     }
`






