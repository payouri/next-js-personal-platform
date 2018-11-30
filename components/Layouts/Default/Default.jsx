import Head from 'next/head';
import Navbar from '../../Navbar/Navbar';

const DefaultLayout = props => (
    <div className='has-navbar-fixed-top'>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="stylesheet" href="/static/bulma-0.7.1/css/bulma.min.css"/>
            {/* <link rel="stylesheet" href="/_next/static/style.css"/> */}
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"/>
        </Head>
        <Navbar classnames='is-fixed-top' />
        {props.children}
    </div>
);

export default DefaultLayout;