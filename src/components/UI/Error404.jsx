
import { Link } from "react-router-dom";

const Error404=()=>{
    return (
        <div className="error-content">
            <img src="./img/error 404.jpg" alt="error page not found"/>
            
            <Link to="/"><p>Back to main page</p></Link>
        </div>
    )
}

export default Error404