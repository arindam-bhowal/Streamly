import './register.scss';

const Register = () => {
    return <div className='registerContainer'>
        <div className="wrapper">

            <div className="info">
                <div className="top">
                    <h1 className='logo'>Streamly</h1>
                </div>
                <div className="bottom">
                    <h2>REGISTER</h2>
                    <div className="details">
                        <p>Welcome to Streamly!! We hope you will enjoy your time here</p>
                    </div>
                </div>
            </div>

            <div className="formContainer">
                <form className="register">
                    <div className="inputs">
                        <input type="text" placeholder='username' />
                        <input type="email" placeholder='email' />
                        <input type="password" placeholder='password' />
                    </div>
                    <button className='btn' >Register</button>
                    <div className="register">
                        <p>Already have an account
                            <span> Login </span> now!!
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>;
};

export default Register;
