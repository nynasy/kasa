import PropTypes from "prop-types";
import Card from "./Card";
import Properties from "./Properties";


export default function Cards(props) {
  return (
    Properties().map((data) => 
      (
        <Card key={data.id} data={data} />
      )
    )
  );
}

Cards.propTypes = {
    data: PropTypes.object
}