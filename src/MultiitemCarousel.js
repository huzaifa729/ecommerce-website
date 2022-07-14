import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import { data, multiData } from './data';
// import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { useEffect } from 'react';
let slidesToShow = 4;
const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <ArrowBackIosIcon style={{ color: 'white', fontSize: '50px' }} />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  console.log(props);
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <ArrowForwardIosIcon style={{ color: 'white', fontSize: '50px' }} />
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: slidesToShow,
  slidesToScroll: 1,
  infinite: false,
  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const MultiItemCarousel = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  if (width <= 426) {
    slidesToShow = 1;
  } else if (width > 426 && width <= 769) {
    slidesToShow = 3;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 4;
  } else {
    slidesToShow = 5;
  }

  return (
   <div className='r'>
    <div className='pin'>Trending Products</div>
    <div style={{ margin: '20px' }} className='carousel'>
      <Slider {...carouselProperties}>
        {multiData.map((item) => (
          <Card item={item} />
        ))}
      </Slider>
    </div>
    </div>
  );
};

const Card = ({ item }) => {
  return (
 
    <div style={{ textAlign: 'center' }}>
      <img
        className='multi__image'
        src={item}
        alt=''
         style={{
            width: '100%',
         height: '200px',
          objectFit: 'contain',
          marginBottom: '10px',
          
         }}
      />
      {/* <p style={{ fontSize: '20px', padding: '1px 0',color: 'white',}}>TOP TRNDING TVs</p>
      <p style={{ fontSize: '16px', padding: '2px 0', color: 'white' }}>
        From ₹ 7,000
      </p>
      <p style={{ fontSize: '17px', padding: '2px 0', color: 'white' }}>
        Up To ₹ 5,000 Off on HDFC
      </p> */}

      <div className="style">
           <div className="one">Top Trading to wear</div>
           <div className="two"> From ₹7,000</div>
           <div className="three">Up To ₹ 5,000 Off on HDFC</div>
      </div>
    </div>
  
  );
};

export default MultiItemCarousel;