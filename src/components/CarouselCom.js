import { Carousel } from 'react-bootstrap';
import '../style/CarouselCom.css';

function CarouselCom() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./Brand_1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <h5>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./Brand_2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <h5>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./Brand_3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <h5>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselCom;