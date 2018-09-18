const Input = props => (

    <input className={`input${' ' + props.classnames}`} style={props.style} 
        type={props.type} name={props.name} id={props.id}
        onInput={props.onInput} onChange={props.onChange} placeholder={props.placeholder}/>

)
export default Input;