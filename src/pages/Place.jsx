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
         <div className="slider">
            <Slider pictures={property?.pictures}/>
        </div>

        <div className="details">
          <div className="row">
            <div className="titleLocation">
              <h1>{property.title}</h1>
              <p>{property.location}</p>
            </div>
            <div className="host">              
              <p>{firstName}<br/>{lastName}</p>
              <img src={host?.picture} alt="host" />        
            </div>          
          </div>

          <div className="row">
            <div className="tags">              
              {property?.tags?.map((tag, index) =>               
                <Tag key={index} label={tag}/>              
                )
              }  
            </div>
            <div className="rate">
              <Rate rate={property?.rating}/>        
            </div>        
          </div>

          <div className="row">
            <div className="description">
              <Collapse label="description">      
                <p>
                {property?.description}
                </p>
              </Collapse>              
            </div>

            <div className="equipements">
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