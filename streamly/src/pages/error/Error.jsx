import './error.scss';

const Error = () => {
    return (
        <>
            <div id="background"></div>
            <div class="errorTop">
                <h1>404</h1>
                <h3>page not found</h3>
            </div>
            <div class="errorContainer">
                <div class="ghost-copy">
                    <div class="one"></div>
                    <div class="two"></div>
                    <div class="three"></div>
                    <div class="four"></div>
                </div>
                <div class="ghost">
                    <div class="face">
                        <div class="eye"></div>
                        <div class="eye-right"></div>
                        <div class="mouth"></div>
                    </div>
                </div>
                <div class="shadow"></div>
            </div>
            <div class="bottom">
                <p>Boo, looks like a ghost stole this page!</p>

                <div class="buttons">
                    <button class="btn">Back</button>

                    {/* <Link to='/'> */}
                    <button class="btn">Home</button>
                    {/* </Link> */}
                </div>
            </div>

        </>
    );
};

export default Error;
