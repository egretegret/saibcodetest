import { Image, Row, Col } from 'react-bootstrap';
import '../style/HoverCom.css'

function HoverCom() {
    return (
        <div className="hover-div">
            <Row>
                <Col xs={6} md={4}>
                    <Image className="hover-img"
                        src="./lubricant.png"
                        onMouseOver={e => e.currentTarget.src = "./heart.png"}
                        onMouseOut={e => e.currentTarget.src = "./lubricant.png"}
                        roundedCircle
                    />
                </Col>
                <Col xs={6} md={4}>
                    <Image className="hover-img"
                        src="./condom.png"
                        onMouseOver={e => e.currentTarget.src = "./heart.png"}
                        onMouseOut={e => e.currentTarget.src = "./condom.png"}
                        roundedCircle
                    />
                </Col>
                <Col xs={6} md={4}>
                    <Image className="hover-img"
                        src="./femininewash.png"
                        onMouseOver={e => e.currentTarget.src = "./heart.png"}
                        onMouseOut={e => e.currentTarget.src = "./femininewash.png"}
                        roundedCircle
                    />
                </Col>
            </Row>
        </div>
    );
}

export default HoverCom;