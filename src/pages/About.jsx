import Banner from "../components/Banner";
import bannerImg from "../assets/banner_about.png"

function About() {
    return (
      <div>
          <Banner img={bannerImg}/>
          About
      </div>
    );
  }
  
  export default About;