import { PlayArrow, ThumbUp } from '@mui/icons-material';
import './featured.scss'

const Featured = () => {
  return (
    <div className='featured'>

      <div className="infoBox">
        <div className="title">
          <h1>SPIDERMAN: No Way Home</h1>
        </div>
        <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odit quod dolore aliquam modi labore voluptatibus aspernatur, natus ullam, pariatur quibusdam vitae quas nemo illo laborum alias est in nostrum.</div>
        
        <div className="infoIcons">
          <div className="iconContainer">
            <PlayArrow className='icon' />
          </div>
          <div className="iconContainer">
            <ThumbUp className='icon' />
          </div>
        </div>
      </div>

      <div className="featureBox">
        <img src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/12/spiderman-1639554053.jpg" alt="" />
      </div>

    </div>
  );
};

export default Featured;
