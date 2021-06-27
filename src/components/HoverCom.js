import { Image } from 'react-bootstrap';

function HoverCom() {
    return (
        <div>
            <Image className="social-icon" src="./logo192.png"
                onMouseOver={e => e.currentTarget.src = "./logo512.png"}
                onMouseOut={e => e.currentTarget.src = "./logo192.png"}
            />
            <Image className="social-icon" src="./logo192.png"
                onMouseOver={e => e.currentTarget.src = "./logo512.png"}
                onMouseOut={e => e.currentTarget.src = "./logo192.png"}
            />
            <Image className="social-icon" src="./logo192.png"
                onMouseOver={e => e.currentTarget.src = "./logo512.png"}
                onMouseOut={e => e.currentTarget.src = "./logo192.png"}
            />
        </div>
    );
}

export default HoverCom;