const Post = (props) => (
    <main className="post--page">
        <section className="hero is-large" style={{background: `url('${props.cover}') center/cover no-repeat`}}>
            <div className="container">
                <div className="hero-head"></div>
                <div className="hero-body">
                    <h1 className="title">{props.title}</h1>
                    <p className="subtitle">{props.smallDesc}</p>
                </div>
                <div className="hero-foot"></div>
            </div>
        </section>
        <section className="section">
            <div className="container content">
                {props.body}
            </div>
        </section>
    </main>

);

export default Post;