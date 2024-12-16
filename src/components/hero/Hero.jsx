import { Carousel } from "react-bootstrap";
import img1 from "../../assets/img1.jpg";

export default function Hero() {
  return (
    <div className="Hero">
      <Carousel>
        <Carousel.Item>
          <img src={img1}/>
          <Carousel.Caption>
      
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img1} />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img1}/>
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
