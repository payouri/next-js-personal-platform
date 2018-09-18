const Checkbox = props => (

    <label className='checkbox'>
        <input onChange={props.onChange} type='checkbox' name={props.name} disabled={props.disabled}></input>
        {props.children}
    </label>

)
export default Checkbox;