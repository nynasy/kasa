import "../styles/About.scss"
import Banner from "../components/Banner";
import bannerImg from "../assets/banner_about.png"
import Collapse from "../components/Collapse";


function About() {
    return (
      <div className="about">
          <Banner img={bannerImg}/>

          <div className="collapses">
              <Collapse label="Fiabilité">  
                  <p>Fiabilité</p>                   
              </Collapse>

              <Collapse label="Respect">  
                  <p>Respect</p>                   
              </Collapse>

              <Collapse label="Service">  
                  <p>Service</p>                   
              </Collapse>

              <Collapse label="Sécurité">  
                  <p>Sécurité</p>                   
              </Collapse>

            </div>       
      </div>
    );
  }
  
  export default About;