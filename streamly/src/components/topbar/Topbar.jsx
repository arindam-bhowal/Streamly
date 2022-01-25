import { Edit, Search } from '@mui/icons-material';
import './topbar.scss';

const Topbar = () => {
    return <div className='topbar'>
        <div className="topbarTop">
            <div className="leftSection">
                <h2>Hii <span>Arindam Bhowal</span>!!</h2>
                <p>HOPE YOU ARE HAVING A GREAT DAY</p>
            </div>
            <div className="rightSection">
                <div className="profilePic">
                    <img src="/assets/blankProfilePic.png" alt="" />
                </div>
                <div className="rightSectionIcon">
                    <Edit className='icon' />
                </div>
            </div>
        </div>
        <div className="topbarBottom">
            <div className="searchBox">
                <input type="text" className="searchInput" placeholder='Search here' />
                <Search className='searchIcon' />
            </div>
        </div>
    </div>;
};

export default Topbar;
