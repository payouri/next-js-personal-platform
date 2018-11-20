import Layout from '../components/Layouts/Default/DefaultNoNav';
import Columns from '../components/Layouts/Columns/Columns';
import Container from '../components/Layouts/Container/Container';
import Section from '../components/Layouts/Section/Section';
import Hero from '../components/Hero/Hero';
import PolyBackground from '../components/Backgrounds/PortfolioBg';
import Scroller from '../components/Scroller/Scroller';
import BoxedTitle from '../components/Box/BoxedTitle';
import Link from 'next/link';

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
            <Columns classnames='is-multiline is-variable is-mobile' sizes={[4, 8]}>
                <figure className="loading image is-1by1">
                    <LazyImg src='http://localhost/www/assets/imgs/maface.svg' title='my vectorised face'></LazyImg>
                </figure>

                <div className='content'>
                    <div className='title'>Introducing Myself</div>
                    <p className=''>I started learning web development by myself as a way to reduce my playtime on several games this was about two years ago. At first it was kind of hard to grasp anything but I kept myself at it, baby steps everydays. The more I satisfied my curiosity the more I was curious..</p>
                    <p className=''>A few months later I had learn tons of new stuffs, including Responsive Web Design and Accessiblity, Javascript, PHP but still I felt that it was so overwelming and that I needed guidance.</p>
                    <p className=''>So here I am, back in school learning things in a more academic way. Looking forwards to get my first gig in the industry.</p>
                    <blockquote> Youri 25, junior web developer.</blockquote>
                </div>
            </Columns>
            <nav>
                <Columns sizes={[4, 4, 4]}>
                    <Link href='portfolio/projects'>
                        <a>
                            <BoxedTitle
                                background={{url: 'http://localhost/www/assets/imgs/duotone1.jpg',}}
                                title={{title: 'My Projects', size: 2, align: 'right', position: 'bottom'}}
                                ratio='4by3'
                            ></BoxedTitle>
                        </a>
                    </Link>
                    <Link href='portfolio/aboutme'>
                        <a>
                            <BoxedTitle
                                background={{url: 'http://localhost/www/assets/imgs/duotone1.jpg',}}
                                title={{title: 'About Me', size: 2, align: 'right', position: 'bottom'}}
                                ratio='4by3'
                            ></BoxedTitle>
                        </a>
                    </Link>
                    <Link href='portfolio/contact'>
                        <a>
                            <BoxedTitle
                                background={{url: 'http://localhost/www/assets/imgs/duotone1.jpg',}}
                                title={{title: 'Get in Touch', size: 2, align: 'right', position: 'bottom'}}
                                ratio='4by3'
                            ></BoxedTitle>
                        </a>
                    </Link>
                </Columns>
            </nav>
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