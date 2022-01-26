import { Link } from 'react-router-dom';
import './login.scss';

const Login = () => {
    return <div className='loginContainer'>
        <div className="wrapper">

            <div className="info">
                <div className="top">
                    <h1 className='logo'>Streamly</h1>
                </div>
                <div className="bottom">
                    <h2>LOGIN</h2>
                </div>
            </div>

            <div className="formContainer">
                <form className="login">
                    <div className="inputs">
                        <input type="text" placeholder='username' />
                        <input type="password" placeholder='password' />
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id='checkbox' />
                        <span>Remember Password ?</span>
                    </div>
                    <button className='btn' >Login</button>
                    <span className='forgotPassword'>forgot password ?</span>
                    <div className="register">
                        <p>New to Streamly
                            <Link to='/register' >
                                <span> Sign Up</span>
                            </Link>
                            now!!
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>;
};

export default Login;
