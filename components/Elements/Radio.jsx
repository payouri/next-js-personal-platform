const Radio = props => (

    <label className='radio'>
        <input onChange={props.onChange} type="radio" name={props.name} id={props.id} disabled={props.disabled}/>
        {props.children}
    </label>

);
export default Radio;