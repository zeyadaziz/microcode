import Carousel from 'react-bootstrap/Carousel';

function CarouselRb() {
  return (
    <Carousel>
        
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
       
          <p>Since 2003, Marcel Digital has been building and maintaining award-winning custom websites and offering web development services for brands and businesses of all sizes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_960_720.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        
          <p>You need a website that’s going to work for you, not just look better. Our website development services focus on both.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
    
          <p>
          Have questions about our web development services and how we can help bring your project to life? Shoot us a message and one of our web development experts will be in touch!.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselRb;