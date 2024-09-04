import PropTypes from "prop-types";
import "../styles/Slider.scss"
import arrowLeft from "../assets/arrow_left.png"
import arrowRight from "../assets/arrow_right.png"

function Slider(props) {

 // const pictures = props.pictures;

 const pictures = [
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
]

  const numberOfSlides = pictures.length;  

  let currentIndex = 0;	
  let lastIndex = numberOfSlides - 1;



  function previous() {
    let nextIndex;  
    if(currentIndex === 0){
      nextIndex = lastIndex;
    } else {
      nextIndex = currentIndex - 1; 
    }	
    changeSlide(nextIndex);
  }

  function next() {
    let nextIndex;
    if(currentIndex === lastIndex){
      nextIndex = 0;
    } else {
      nextIndex = currentIndex + 1; 
    }	
    changeSlide(nextIndex);
  }

  function changeSlide(nextIndex){
    let slideImage = document.getElementById("picture");
    slideImage.setAttribute("src", pictures[nextIndex]);

    let page = document.getElementById("page");
    page.innerHTML = (nextIndex + 1) + "/" +  numberOfSlides;
    currentIndex = nextIndex;
  }  
  
  return (     
    <div className="images">
      <img id="picture" className="picture" src={pictures[0]} alt="vue du logement" />       
      <img id="arrow_left" className="arrow arrow_left" src={arrowLeft} alt="fleche gauche" onClick={previous}/>
      <img id="arrow_right" className="arrow arrow_right" src={arrowRight} alt="fleche droite" onClick={next}/>		
      <div id="page" class="page">
          1/{numberOfSlides}
      </div>	     
    </div>
    
  );

  
    
}
  
export default Slider;

Slider.propTypes = {
  pictures: PropTypes.array
}