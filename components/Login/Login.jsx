// import './Login.css';

const Login = props => (

    <section className="hero is-success is-fullheight">
        <div className="hero-body">
            <div className="column is-4 is-offset-4">
                <h3 className="title has-text-grey">Login</h3>
                <p className="subtitle has-text-grey">Please login to proceed.</p>
                <div className="box">
                    <figure className="avatar">
                        <img src="https://placehold.it/128x128"/>
                    </figure>
                    <form>
                        <div className="field">
                            <div className="control">
                                <input className="input is-large" type="email" placeholder="Your Email" autoFocus/>
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <input className="input is-large" type="password" placeholder="Your Password"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="checkbox">
                                <input type="checkbox"/>
                                Remember me
                            </label>
                        </div>
                        <button className="button is-block is-info is-large is-fullwidth">Login</button>
                    </form>
                    <p className="has-text-grey">
                        <a href="../">Sign Up</a> &nbsp;·&nbsp;
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>
                    </p>
                </div>
            </div>
        </div>
        <style jsx>{`
        .hero.is-success {
            background: #F2F6FA;
        }
        .hero .nav, .hero.is-success .nav {
            -webkit-box-shadow: none;
            box-shadow: none;
        }
        .box {
            margin-top: 5rem;
        }
        .avatar {
            margin-top: -70px;
            padding-bottom: 20px;
        }
        .avatar img {
            padding: 5px;
            background: #fff;
            border-radius: 50%;
            -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
            box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
        }
        input {
            font-weight: 300;
        }
        p {
            font-weight: 700;
        }
        p.subtitle {
            padding-top: 1rem;
        }
        `}</style>
    </section>

);

export default Login;