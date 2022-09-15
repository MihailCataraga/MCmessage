import "./sitebar.scss";
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import { emails } from "../../dataemails";
import { Link } from "react-router-dom";

const Sitebar = () => {
  return (
    <div className="sitebar">
        <div className="message">
            <button>Create Message</button>
        </div>
        <Link to="/inbox" style={{textDecoration:"none"}}>
            <div className="option">
                <DraftsOutlinedIcon className="icon" />
                <p>Inbox</p>
                <p className="value">{emails.length}</p>
            </div>
        </Link>
        <div className="option">
            <StarBorderOutlinedIcon className="icon" />
            <p>Marked</p>
            <p className="value"></p>
        </div>
        <div className="option">
            <GroupOutlinedIcon className="icon" />
            <p>Group</p>
            <p className="value"></p>
        </div>
        <div className="option">
            <CreateOutlinedIcon className="icon" />
            <p>Drafts</p>
            <p className="value"></p>
        </div>
        <div className="option">
            <SendOutlinedIcon className="icon" />
            <p>Send</p>
            <p className="value"></p>
        </div>
        <div className="option">
            <DeleteOutlineOutlinedIcon className="icon" />
            <p>Deleted</p>
            <p className="value"></p>
        </div>
        <div className="option">
            <DeleteForeverSharpIcon className="icon" />
            <p>Spam</p>
            <p className="value"></p>
        </div>
        <div className="labels">   
            <p>LABELS</p>
            <div className="icons">
                <DriveFileRenameOutlineOutlinedIcon className="icon" />
                <AddOutlinedIcon className="icon" />
            </div>
            
        </div>
        <div className="label">
            <TripOriginIcon className="icon" style={{color:"red"}} />
            <p>Personal</p>
        </div>
        <div className="label">
            <TripOriginIcon className="icon" style={{color:"yellow"}} />
            <p>Family</p>
        </div>
        <div className="label">
            <TripOriginIcon className="icon" style={{color:"blue"}} />
            <p>Friands</p>
        </div>
        <div className="label">
            <TripOriginIcon className="icon" style={{color:"purple"}} />
            <p>Work</p>
        </div>
    </div>
  )
}

export default Sitebar;