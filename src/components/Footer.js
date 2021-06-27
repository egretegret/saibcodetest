import '../style/Footer.css';

function Footer() {
  return (
    <div className="footer-container">
        <div id="left">
            <p>Search</p> 
            <p>Shipping Policy</p> 
            <p>Privacy Policy</p> 
            <p>Terms of Service</p>
        </div>
        <div id="right">
            <p>© 2021, SAIB</p>
        </div>
    </div>
  );
}

export default Footer;