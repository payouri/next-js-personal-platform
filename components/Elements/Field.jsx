const Field = props => (

    <div className={`label${' ' + props.classnames}`} >
        {props.children}
    </div>

)
export default Field;