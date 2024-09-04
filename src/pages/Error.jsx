import { Link } from "react-router-dom";
import "../styles/Error.scss"

function Error() {
    return (
      <div className="error">
        <p className="errorCode">404</p>
        <h1 className="errorMessage">Oups!La page que vous demandez n'existe pas.</h1>
        <Link to= "/"> <p>Retourner sur la page d'accueil</p></Link>
      </div>
    );
  }
  
  export default Error;