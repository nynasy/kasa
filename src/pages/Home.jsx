
import "../styles/pages/Home.scss"
import Banner from "../components/Banner";
import bannerImg from "../assets/banner.png"
import Properties from "../components/Properties";
import Card from "../components/Card";


function Home() {
  return (  
    <div className="home">
      
      
        <Banner img={bannerImg} title="Chez vous, partout et ailleurs"/>             
        <div className="cardsContainers">
          <div className="cards">
            { Properties().map((data) => 
                (
                  <Card key={data.id} data={data} />
                )
              )
            } 
          </div>
        </div>
    </div>
  );
}

export default Home;
