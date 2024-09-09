import { Link } from "react-router-dom";
import "../styles/pages/Error.scss"

function Error() {
    return (
      <div className="error">
        <p className="errorCode">404</p>
        <div className="errorDetail">
          <p className="errorMessage"><span>Oups!La page que </span> <span>vous demandez n'existe pas.</span></p>
          <div className="redirect">
              <Link to= "/"> <p>Retourner sur la page d'accueil</p></Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default Error;