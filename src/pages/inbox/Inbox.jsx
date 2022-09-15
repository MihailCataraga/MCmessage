import Navbar from "../../Components/navbar/Navbar";
import Sitebar from "../../Components/sitebar/Sitebar";
import "./inbox.scss";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SearchIcon from '@mui/icons-material/Search';
import { emails } from "../../dataemails";
import { useState } from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const Inbox = () => {
    const [avatar, setAvatar] = useState();
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [time, setTime] = useState();
    const [title, setTitle] = useState();
    const [text, setText] = useState();
    
  return (
    <div className="inbox">
        <Navbar />
        <div className="main">
            <Sitebar />
            <div className="emails">
                <div className="filtrebox">
                    <div className="filtre">
                        <input type="text" placeholder="What are you looking for?" />
                        <SearchIcon className="icon" />
                    </div>
                </div>
                {
                    emails.map(email => (
                        <div className="email" key={email.id} onClick={() => (  
                                                                                setAvatar(email.avatar), 
                                                                                setName(email.name),
                                                                                setSurname(email.surname),
                                                                                setTime(email.time),
                                                                                setTitle(email.title),
                                                                                setText(email.text)
                                                                             )}>
                            <div className="avatar">
                                <div className="top">
                                    <img src={email.avatar} alt="Avatar img" />
                                    <div>
                                        <p className="name">{email.name + " " + email.surname}</p>
                                        <p className="time">{email.time}</p>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <h3>{email.title}</h3>
                                    <p>{email.text}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {name === undefined 
                ? <div className="email">
                    <MailOutlineIcon className="icon" />
                </div> 
                : <div className="viewMail">      
                    <div className="top">
                        <img src={avatar} alt="Avatar img" />
                        <div className="nameUser">
                            <p className="name">{name + " " + surname}</p>
                            <div className="time">
                                <AccessTimeIcon className="icon" />
                                <p>{time}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default Inbox