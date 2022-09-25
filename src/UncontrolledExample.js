import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UncontrolledExample.css';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="hint">
        <img
          src="https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI="
          alt="First slide"
        />
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className="hint">
        <img
       
          src="https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI="
          alt="Second slide"
        />
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className="hint">
        <img
    
          src="https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI="
          alt="Third slide"
        />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;

