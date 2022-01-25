import { ArrowBack } from '@mui/icons-material';
import './updateUser.scss';

const UpdateUser = () => {
    return <div className='updateUser'>
        <div className="wrapper">
            <div className="top">
                <ArrowBack className='backButton' />
                <h1>Edit Profile</h1>
            </div>
            <form >
                <div className="username inputs">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id='username' />
                </div>
                <div className="email inputs">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id='email' />
                </div>
                <div className="profilePic inputs">
                    <label htmlFor="profilePic">Profile Picture: </label>
                    <input type="file" id='profilePic' />
                </div>
                <div className="password inputs">
                    <label htmlFor="password">Password:</label>
                    <input type="text" id='password' />
                </div>

                <button className="btn">Update</button>
            </form>
        </div>
    </div>;
};

export default UpdateUser;
