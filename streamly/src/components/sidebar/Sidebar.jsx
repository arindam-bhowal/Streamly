import './sidebar.scss'
import { DirectionsRunOutlined, FavoriteBorderOutlined, FindInPageOutlined, HistoryToggleOffOutlined, LocalFireDepartmentOutlined, LogoutOutlined, MenuBookOutlined, MoodBadOutlined, PsychologyOutlined, ScienceOutlined, TheaterComedyOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarTop">
        <div className="title">Streamly</div>
        <Link to='/login'>
          <LogoutOutlined className='logoutIcon' />
        </Link>
      </div>

      <div className="sidebarBottom">
        <div className="type">
          <h1>TYPE</h1>
          <div className="option">Movies</div>
          <div className="option">TV shows</div>
        </div>
        <div className="genres">
          <h1>GENRE</h1>
          <div className="option">
            <div className="optionIcon"><LocalFireDepartmentOutlined /></div>
            <div className="optionText">Action</div>
          </div>
          <div className="option">
            <div className="optionIcon"><MenuBookOutlined /></div>
            <div className="optionText">Biographical</div>
          </div>
          <div className="option">
            <div className="optionIcon"><TheaterComedyOutlined /></div>
            <div className="optionText">Comedy</div>
          </div>
          <div className="option">
            <div className="optionIcon"><FindInPageOutlined /></div>
            <div className="optionText">Crime and mystery</div>
          </div>
          <div className="option">
            <div className="optionIcon"><PsychologyOutlined /></div>
            <div className="optionText">Fantasy</div>
          </div>
          <div className="option">
            <div className="optionIcon"><HistoryToggleOffOutlined /></div>
            <div className="optionText">Historical</div>
          </div>
          <div className="option">
            <div className="optionIcon"><DirectionsRunOutlined /></div>
            <div className="optionText">Horror</div>
          </div>
          <div className="option">
            <div className="optionIcon"><FavoriteBorderOutlined /></div>
            <div className="optionText">Romance</div>
          </div>
          <div className="option">
            <div className="optionIcon"><ScienceOutlined /></div>
            <div className="optionText">Science fiction</div>
          </div>
          <div className="option">
            <div className="optionIcon"><MoodBadOutlined /></div>
            <div className="optionText">Thriller</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
