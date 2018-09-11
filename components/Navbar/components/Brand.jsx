const BrandLink = props => (
    <div className='navbar-brand'>
        <Link href={props.href}>
            <a className='navbar-item'>
                Home
            </a>
        </Link>
    </div>
);

export default BrandLink;