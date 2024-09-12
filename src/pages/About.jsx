import "../styles/pages/About.scss"
import aboutUs from "../data/about.json"
import Banner from "../components/Banner";
import bannerImg from "../assets/banner_about.png"
import Collapse from "../components/Collapse";
import { useState } from "react";


function About() {
    const [aboutData] = useState(aboutUs);
    
    return (
      <div className="about">
          <Banner img={bannerImg}/>

          <div className="collapses">

              {aboutData?.map((item, index) =>                
                    <Collapse key={index} label={item?.value}>  
                        <p>{item?.description}</p>                   
                    </Collapse>       
                  )
              }              

            </div>       
      </div>
    );
  }
  
  export default About;