import Tag from "../components/Tag";
import Rate from "../components/Rate";

import "../styles/Place.scss"
import Slider from "../components/Slider";

function Place(props) {
 
    return (
      <div className="place">
         <div className="slider">
            <Slider/>
        </div>
        <div className="details">
          <div className="row">
            <div className="titleLocation">
              <h1>Appartement cosy</h1>
              <p>Ile de France - Paris 17e</p>
            </div>
            <div className="host">
              <p>Nathalie<br/>Jean</p>
              <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg" alt="" />
        
            </div>
          
          </div>
          <div className="row">
            <div className="tags">
              <Tag label="cozy"/>
              <Tag label="canal"/>
              <Tag label="paris 10e"/>

          
            </div>
            <div className="rate">
              <Rate rate="3"/>

        
            </div>
        
          </div>
          <div className="row">
            <div className="description">
            
            </div>
            <div className="equipements">
        
            </div>
        
          </div>
        </div>
      </div>
    );
  }
  
  export default Place;