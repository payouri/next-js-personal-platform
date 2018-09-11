import Link from 'next/link';

const Menu = (props) => {

    const entries = props.links || [],
    
        links = entries.map( (entry, i) => (
            <li key={i}>
                <Link href={entry.href}>
                    <a onClick={entry.action} data-target={entry.name}>{entry.title}</a>
                </Link>
            </li>
        ));

    return (

        <aside className="menu">
            <p className="menu-label">
                {props.title}
            </p>
            <ul className="menu-list">
                {links}
            </ul>
        </aside>

    )

};

export default Menu;