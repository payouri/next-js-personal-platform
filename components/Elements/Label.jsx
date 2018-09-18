const Label = props => (

    <label className={`label${' ' + props.classnames}`} htmlFor={props.for}>
        {props.children}
    </label>

)

export default Label;