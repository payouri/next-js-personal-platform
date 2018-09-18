import Layout from '../components/Layouts/Default/DefaultNoNav';
import Columns from '../components/Layouts/Columns/Columns';
import Container from '../components/Layouts/Container/Container';
import Section from '../components/Layouts/Section/Section';
import Level from '../components/Layouts/Level/Level';
import Hero from '../components/Hero/Hero';
import PolyBackground from '../components/Backgrounds/PortfolioBg';
import Scroller from '../components/Scroller/Scroller';

import Title from '../components/Content/Title/Title';

import LazyImg from '../components/LazyLoad/LazyImg';




import './portfolio.css';

const PortfolioPage = () => {

    const heroFoot = (

        <Container>

            <div className="level">
                <div className="level-item has-text-centered">
                    <Scroller />
                </div>
            </div>

        </Container>

    );

    const aboutMe = (
        <>
            <div className="title">Who I am</div>
            <nav>
                <Level>
                    <div className="title">My Projects</div>
                    <div className="title">About Me</div>
                    <div className="title">Get in Touch</div>                    
                </Level>
            </nav>
            <Columns classnames='is-multiline is-variable is-mobile' sizes={[4, 8]}>
                <figure className="loading image is-1by1">
                    <LazyImg src='http://localhost/www/assets/imgs/maface.svg' title='my vectorised face'></LazyImg>
                </figure>

                <div>
                    <div className="title">Curriculum</div>
                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aut omnis
                        beatae! Suscipit rerum dolore
                        quibusdam minima blanditiis, ratione culpa dignissimos adipisci laborum voluptatum aut eum
                        ullam
                        harum fugit laboriosam.</p>
                    <div className="title">Curriculum</div>
                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aut omnis
                        beatae! Suscipit rerum dolore
                        quibusdam minima blanditiis, ratione culpa dignissimos adipisci laborum voluptatum aut eum
                        ullam
                        harum fugit laboriosam.</p>
                    <div className="title">Curriculum</div>
                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aut omnis
                        beatae! Suscipit rerum dolore
                        quibusdam minima blanditiis, ratione culpa dignissimos adipisci laborum voluptatum aut eum
                        ullam
                        harum fugit laboriosam.</p>
                </div>
            </Columns>
        </>
    )

    return (
        <Layout>
            <PolyBackground/>
            <Hero style={{background: '#121212'}} classnames='is-fullheight' foot={heroFoot}>
                <Container>
                    <div className="title is-1 has-text-white">
                        Hello, <br/> I'm Youri Payou.
                    </div>
                    <div className="subtitle is-3 has-text-white">
                        I wish to develop responsive, performant and user-friendly web experiences
                        <br/> for the current and the future web generations.
                    </div>
                    <style jsx>{`

                        .title {
                            font-size: 5rem;
                            font-family: "Cantata One", serif;
                        }

                        .title,
                        .subtitle {
                            text-shadow: 0 0 5vmin rgba(242, 242, 242, 0.3);
                        }

                        @media screen and (max-width: 1024px) {
                            .title {
                                font-size: 4rem;
                            }
                            .subtitle {
                                font-size: 1.7rem;
                            }
                        }

                        @media screen and (max-width: 680px) {
                            .title {
                                font-size: 3rem;
                            }
                            .subtitle {
                                font-size: 1.4rem;
                            }
                        }

                    `}</style>
                </Container>
            </Hero>
            <Section>
                <Container>
                    {aboutMe}
                </Container>
            </Section>
        </Layout>
    )

}

export default PortfolioPage;