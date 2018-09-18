const Button = props => (

    <button onClick={props.onClick} className={`button${' '+props.classnames}`}>
        {props.children}
    </button>

);

export default Button;