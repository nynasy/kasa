import PropTypes from "prop-types";
import "../styles/components/Slider.scss"
import arrowLeft from "../assets/arrow_left.png"
import arrowRight from "../assets/arrow_right.png"
import { useEffect, useState } from "react";

export default function Slider(props) {

  const pictures = props.pictures;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberOfSlides, setNumberOfSlides] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);

  function previous() {  
    setCurrentIndex((currentIndex === 0) ? lastIndex : currentIndex - 1);    
  }

  function next() {
    setCurrentIndex((currentIndex === lastIndex) ? 0 : currentIndex + 1);  
  }

  useEffect(() => {  
    setNumberOfSlides(pictures?.length);
    setLastIndex(numberOfSlides - 1);    
  }, [numberOfSlides, pictures]);

  function currentPicture(){
    return pictures?.find((_element, index) => index === currentIndex);
  }
  
  return (         
    <div className="slider">
      <img className="picture" src={currentPicture()} alt="vue du logement" />         
      {(numberOfSlides > 1) && <img className="arrow arrow_left" src={arrowLeft} alt="flèche gauche" onClick={previous}/>}
      {(numberOfSlides > 1) && <img className="arrow arrow_right" src={arrowRight} alt="flèche droite" onClick={next}/>}
      <div className="page">
          {currentIndex + 1} / {numberOfSlides}
      </div>	     
    </div>    
  );      
}
  
Slider.propTypes = {
  pictures: PropTypes.array
}