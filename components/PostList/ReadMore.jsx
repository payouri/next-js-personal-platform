import Link from 'next/link';

const ReadMore = props => (

    <Link as={props.alias} href={props.href}>
        <a className={`${props.classnames?' ' + props.classnames:''}`}>
            Lire la suite
        </a>
    </Link>

);

export default ReadMore;
