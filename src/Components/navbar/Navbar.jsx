import "./navbar.scss";
import Avatar from "../../img/avatar.png";
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/" style={{textDecoration:"none"}} >
        <div className="logo">
          <h1><span>MC</span>message</h1>
        </div>
      </Link>
      <div className="avatar">
          <img 
              src={Avatar}
              alt="User avatar"
          />
          <CircleIcon className="icon" />
      </div>
        
    </div>
  )
}

export default Navbar