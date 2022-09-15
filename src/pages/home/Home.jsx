import Navbar from "../../Components/navbar/Navbar";
import Sitebar from "../../Components/sitebar/Sitebar";
import "./home.scss";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <div className="main">
            <Sitebar />
            <div className="mail">
                <MailOutlineIcon className="icon" />
            </div>
        </div>
    </div>
  )
}

export default Home;