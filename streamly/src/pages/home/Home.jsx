import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './home.scss';

const Home = () => {
    return (
        <div className='home'>
            <div className="leftSection">
                <Sidebar />
            </div>
            <div className="rightSection">
                <Topbar />
                <Featured />
                <List />
            </div>
        </div>
    );
};

export default Home;
