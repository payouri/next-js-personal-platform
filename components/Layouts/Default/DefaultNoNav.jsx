import Head from 'next/head';

const NoNav = props => (
    <div className='portfolio'>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="stylesheet" href="/static/bulma-0.7.1/css/bulma.min.css"/>
            <link rel="stylesheet" href="/_next/static/style.css"/>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"/>
        </Head>
        {props.children}
    </div>
);

export default NoNav;