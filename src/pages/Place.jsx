import Tag from "../components/Tag";
import Rate from "../components/Rate";

import "../styles/pages/Place.scss"
import Slider from "../components/Slider";
import Collapse from "../components/Collapse";
import { useParams } from "react-router-dom";
import Property from "../components/Property";

function Place() {
    const { id } = useParams();

    const property = Property(id);

    const host = property.host;
    const firstName = host?.name?.split(" ")[0];
    const lastName = host?.name?.split(" ")[1];

    return (
      <div className="placeContainer">
         <div className="sliderContainer">
            <Slider pictures={property?.pictures}/>
        </div>

        <div className="details">
          <div className="row">
            <div className="column left">
              <div className="titleLocation">
                <p className="title">{property.title}</p>
                <p className="location">{property.location}</p>
              </div>
              <div className="tags">              
                {property?.tags?.map((tag, index) =>               
                  <Tag key={index} label={tag}/>              
                  )
                }  
              </div>
            </div>

            <div className="column right">
              <div className="host">              
                <p>{firstName}<br/>{lastName}</p>
                <img src={host?.picture} alt="host" />        
              </div>     
              <div className="rate">
                <Rate rate={property?.rating}/>        
              </div>        
            </div>             
          </div>        

          <div className="row">
            <div className="collapsable">
              <Collapse label="description">      
                <p>{property?.description}</p>
              </Collapse>              
            </div>

            <div className="collapsable">
              <Collapse label="equipement">     
                {property?.equipments?.map((equipement) =>               
                  <p>{equipement}</p>           
                  )
                }                 
              </Collapse>
            </div>        
          </div>
        </div>
      </div>
    );
  }
  
  export default Place;