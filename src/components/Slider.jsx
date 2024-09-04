import "../styles/Slider.scss"
import arrowLeft from "../assets/arrow_left.png"
import arrowRight from "../assets/arrow_right.png"


let pictures =  [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-4.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-5.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-6.jpg"
]
const numberOfSlides = pictures.length;

let currentIndex = 0;	
let lastIndex = numberOfSlides - 1;

function onClickButtonLeft() {
	console.log("clique sur le bouton gauche");
	let nextIndex;  
	if(currentIndex === 0){
		nextIndex = lastIndex;
	} else {
		nextIndex = currentIndex - 1; 
	}	
	changeSlide(nextIndex);
  };

function onClickButtonRight () {
	console.log("clique sur le bouton droit");
	let nextIndex;

	if(currentIndex === lastIndex){
		nextIndex = 0;
	} else {
		nextIndex = currentIndex + 1; 
	}	

	changeSlide(nextIndex);

  };

  function changeSlide(nextIndex){
	let slideImage = document.getElementById("picture");
	slideImage.setAttribute("src", pictures[nextIndex]);

    let page = document.getElementById("page");
    page.innerHTML = (nextIndex + 1) + "/" +  numberOfSlides;
	currentIndex = nextIndex;
  }


function Slider(props) {

    return (     
      <div className="images">
        <img id="picture" className="picture" src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="vue du logement" />       
        <img id="arrow_left" className="arrow arrow_left" src={arrowLeft} alt="fleche gauche" onClick={onClickButtonLeft}/>
		<img id="arrow_right" className="arrow arrow_right" src={arrowRight} alt="fleche droite" onClick={onClickButtonRight}/>		
		<div id="page" class="page">
            1/{numberOfSlides}
        </div>	
     
     </div>
    );
    
}
  
export default Slider;