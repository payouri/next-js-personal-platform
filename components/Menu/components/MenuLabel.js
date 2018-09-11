const MenuLabel = props => (

    <p className="menu-label">
        { props.title }
        { props.children }
    </p>

);

export default MenuLabel;