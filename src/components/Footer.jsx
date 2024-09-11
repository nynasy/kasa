import "../styles/components/Footer.scss"
import logo_footer from "../assets/logo_footer.png"
function Footer() {
    return (
      <div className="footer">
       <div><img src={logo_footer} alt="Logo footer" /></div>
       <p><span>&copy; 2020 Kasa. All</span> <span> rights reserved</span></p>
      </div>
    );
  }
  
  export default Footer;