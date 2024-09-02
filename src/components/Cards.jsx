import PropTypes from "prop-types";
import Fetcher from "./Fetcher";
import Card from "./Card";


export default function Cards(props) {
  return (
    Fetcher().map((data) => 
      (
        <Card key={data.id} data={data} />
      )
    )
  );
}

 Cards.propTypes = {
    data: PropTypes.object
 }