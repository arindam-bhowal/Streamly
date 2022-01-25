import { PlayArrow, ThumbUp } from '@mui/icons-material';
import { useState } from 'react';
import './listItem.scss';

const ListItem = () => {

    const [isHovered, setIsHovered] = useState(false);



    return <div className='listItem' onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}}>

        {isHovered && <div className="onHoverContainer">
            {/* <div className="videoContainer"></div> */}
            <div className="title">
                <h3>SPIDERMAN: No Way Home</h3>
            </div>
            <div className="iconsAndLimit">
                <PlayArrow className='icon' />
                <ThumbUp className='icon' />
                <span className='icon'>16+</span>
            </div>
        </div>}


        <div className="imgAndVideoContainer">
            {isHovered
                ? <video src="/assets/video.mp4" autoPlay={true} loop muted={true} ></video>

                : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4x-Rzh_Oh0AC9Uv4ygheaX5BmmLFPnbn5fg&usqp=CAU" alt="" />}
        </div>
    </div>;
};

export default ListItem;
