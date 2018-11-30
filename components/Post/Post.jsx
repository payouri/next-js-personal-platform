import Hero from '../Hero/Hero'
import Section from '../Layouts/Section/Section';
import Container from '../Layouts/Container/Container';
import Title from '../Content/Title/Title';

const Post = (props) => (
    <main className="post--page">
        <section className="hero is-large" style={{background: `url('${props.cover?props.cover:''}') center/cover no-repeat`}}>
            <div className="container">
                <div className="hero-head"></div>
                <div className="hero-body">
                    <h1 className="title">{props.title?props.title:''}</h1>
                    <p className="subtitle">{props.smallDesc?props.smallDesc:''}</p>
                </div>
                <div className="hero-foot"></div>
            </div>
        </section>
        <section className="section">
            <div className="container content">
                {props.children}
            </div>
        </section>
    </main>

);

export default Post;