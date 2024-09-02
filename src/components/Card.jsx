import styles from "../styles/Card.scss"
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


export default function Card(props) {
  return (
    <Link className={styles.cardLink} to={`/place/${props.data.id}`} style={{ textDecoration: 'none' }}>
      <div className="card">
        <img src={props.data.cover} alt={props.data.title} />
        <div className="title">
          <p>{props.data.title}</p>
        </div>
      </div>
    </Link>
  );
}

 Card.propTypes = {
    data: PropTypes.object
 }