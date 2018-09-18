import PropTypes from 'prop-types';
import Link from 'next/link';

import './Navbar.css';

const Navbar = (props) => (

    <nav className={`navbar${' ' + props.classnames}`}>
        <div className="container">
            <div className="navbar-start">
                <ul className="navbar-menu is-active">
                    <div className="navbar-item">
                        <Link href='/'>
                            <a className='fab fa-1x fa-twitter'>
                                <span className="sr-only">twitter @payouri</span>
                            </a>
                        </Link>
                    </div>
                    <div className="navbar-item">
                        <Link href='/'>
                            <a className='fab fa-1x fa-codepen'>
                                <span className="sr-only">codepen @payouri</span>
                            </a>
                        </Link>
                    </div>
                    <div className="navbar-item">
                        <Link href='/'>
                            <a className='fab fa-1x fa-github'>
                                <span className="sr-only">github @payouri</span>
                            </a>
                        </Link>
                    </div>
                    <div className="navbar-item">
                        <Link href='/'>
                            <a className='fab fa-1x fa-linkedin'>
                                <span className="sr-only">linkedin @payouri</span>
                            </a>
                        </Link>
                    </div>
                    <div className="navbar-item">
                        <Link href='/contact'>
                            <a className='fas fa-envelope'><span className='sr-only'>contact page</span></a>
                        </Link>
                    </div>
                </ul>
            </div>
            <div className='navbar-brand has-background-white'>
                <Link href='/'>
                    <a className='navbar-item is-paddingless'>
                       <span className='is-size-3 has-text-weight-bold'>Bits of Code</span>
                    </a>
                </Link>
            </div>
            <div className="navbar-end">
                <ul className="navbar-menu is-active">
                    <div className="navbar-item">
                        <Link href='/blog'>
                            <a>Blog</a>
                        </Link>
                    </div>
                    <div className="navbar-item">
                        <Link href='/portfolio'>
                            <a>Portfolio</a>
                        </Link>
                    </div>
                </ul>
            </div>
        </div>
    </nav>

);

Navbar.propTypes = {
    
    'classnames': PropTypes.string,
    'links': PropTypes.arrayOf(PropTypes.object),

};

export default Navbar;
