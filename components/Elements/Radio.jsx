const Radio = props => (

    <label htmlFor={props.id} className={`radio${' ' + props.classnames}`}>
        <input onChange={props.onChange} type="radio" name={props.name} id={props.id} disabled={props.disabled}/>
        {props.children}
    </label>

);
export default Radio;