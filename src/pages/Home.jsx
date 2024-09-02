
import "../styles/Home.scss"
import Banner from "../components/Banner";
import bannerImg from "../assets/banner.png"
import Cards from "../components/Cards";


function Home() {
  return (  
    <div className="home">
      
        <Banner img={bannerImg} title="Chez vous, partout et ailleurs"/>             
        
        <div className="cards">
            <Cards/>
        </div>
    </div>
  );
}

export default Home;
