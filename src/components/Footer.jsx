import "../styles/Footer.scss"
import logo_footer from "../assets/logo_footer.png"
function Footer() {
    return (
      <div className="footer">
       <div><img src={logo_footer} alt="Logo footer" /></div>
       <p>&copy; 2020 Kasa. All rights reserved</p>
      </div>
    );
  }
  
  export default Footer;