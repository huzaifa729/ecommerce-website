
import React from 'react'
// import Doc from './Doc';
import styled from 'styled-components'
// import Brands from './Brands';
function AllProduct() {
    return (
        <Container>
            <Product>

                <TProducts>
                    <Grocery>
                        <Lineone>Grocery</Lineone>
                    </Grocery>

                    <TV>
                        <Lineone>TV & Appliances</Lineone>
                    </TV>

                    <Electronics>
                        <Lineone>Electronics</Lineone>
                    </Electronics>

                    <Medicines>
                        <Lineone>Medicines</Lineone>
                    </Medicines>


                </TProducts>

                <TProducts>
                    <Fashion>
                        <Lineone>Fashion</Lineone>
                    </Fashion>

                    <Luxury>
                        <Lineone>Luxury</Lineone>
                    </Luxury>

                    <Hotels>
                        <Lineone>Hotels</Lineone>
                    </Hotels>

                    <Flights>
                        <Lineone>Flights</Lineone>
                    </Flights>

                </TProducts>


                <TProducts>
                    <Beauty>
                        <Lineone>Beauty</Lineone>
                    </Beauty>

                    <Eat>
                        <Lineone>Eat & drink</Lineone>
                    </Eat>

                    <Entertainment>
                        <Lineone>Entertainment</Lineone>
                    </Entertainment>
           </TProducts>



            </Product>



            {/* <Doc/> */}
            {/* <Brands/> */}
        </Container>
    )
}

export default AllProduct;

const Container = styled.div`
   color: white;
   padding-top: 54px;
   /* height: 1600px; */
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

const TV = styled.div`
 background-image: url('https://www.tatadigital.com/content/dam/tcp/channels/assets/homepage/4xshophp_tiles_29dec/desktop/APPLIANCE_Desktop.png');
 background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 105px;
    width: 184px;
object-fit: contain;
margin: 24px 0px 0px 32px;
border-radius: 12px;
`

const Electronics = styled.div`
 background-image: url('https://www.tatadigital.com/content/dam/tcp/app-core/app-content/slp/slp-electronics/05072022/AEM_Electronics-SBC-2.png');
 background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 105px;
    width: 184px;
object-fit: contain;
margin: 24px 0px 0px 32px;
border-radius: 12px;
`

const Medicines = styled.div`
 background-image: url('https://www.tatadigital.com/content/dam/tcp/channels/assets/homepage/240520221mg/Pharmacy-new.png');
 background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 105px;
    width: 184px;
object-fit: contain;
margin: 24px 0px 0px 32px;
border-radius: 12px;
`

const Fashion = styled.div`
 background-image: url('https://www.tatadigital.com/content/dam/tcp/channels/assets/homepage/06062022/Fashion_AEM.png');
 background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 105px;
    width: 184px;
object-fit: contain;
margin: 24px 0px 0px 32px;
border-radius: 12px;
`

const Luxury = styled.div`
 background-image: url('https://www.tatadigital.com/content/dam/tcp/channels/assets/homepage/4xshophp_tiles_29dec/desktop/Luxury_New_PC.png');
 background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 105px;
    width: 184px;
object-fit: contain;
margin: 24px 0px 0px 32px;
border-radius: 12px;
`

const Hotels = styled.div`
 background-image: url('https://www.tatadigital.com/content/dam/tcp/channels/assets/homepage/4xshophp_tiles_29dec/desktop/Hotels_New_PC.png');
 background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 105px;
    width: 184px;
object-fit: contain;
margin: 24px 0px 0px 32px;
border-radius: 12px;
`
const Flights = styled.div`
 background-image: url('https://www.tatadigital.com/content/dam/tcp/channels/assets/homepage/4xshophp_tiles_29dec/desktop/Flights_New_PC.png');
 background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 105px;
    width: 184px;
object-fit: contain;
margin: 24px 0px 0px 32px;
border-radius: 12px;
`

const Beauty = styled.div`
 background-image: url('https://www.tatadigital.com/content/dam/tcp/channels/assets/homepage/06062022/Beauty_AEM.png');
 background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 105px;
    width: 184px;
object-fit: contain;
margin: 24px 0px 0px 32px;
border-radius: 12px;
`


const Eat = styled.div`
 background-image: url('https://www.tatadigital.com/content/dam/tcp/channels/assets/homepage/4xshophp_tiles_29dec/desktop/FB_New_PC.png');
 background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 105px;
    width: 184px;
object-fit: contain;
margin: 24px 0px 0px 32px;
border-radius: 12px;
`


const Entertainment = styled.div`
 background-image: url('https://www.tatadigital.com/content/dam/tcp/channels/assets/homepage/stories/26jan22_tata_play/Entertainmentimage_Desktop.png');
 background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 105px;
    width: 184px;
object-fit: contain;
margin: 24px 0px 0px 32px;
border-radius: 12px;
`

const Lineone = styled.div`
margin-left: 7px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
margin-top: 3px;
font-size: 17px;
`