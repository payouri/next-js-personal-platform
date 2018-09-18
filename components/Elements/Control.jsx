const Control = props => (

    <div className={`control${' ' + props.classnames || ''}`} >
        {props.children}
    </div>

)
export default Control;