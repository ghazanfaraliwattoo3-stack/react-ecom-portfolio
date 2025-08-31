import Carousel from 'react-bootstrap/Carousel';


function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src="assets/banner/Slider1.png" alt="slider1" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src="assets/banner/Slider2.png" alt="slider2" />
        
        
      </Carousel.Item>
      <Carousel.Item>
        <img src="assets/banner/Slider3.png" alt="slider3" />
        
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;