const Title = props => (
    <props.tag className={`title${props.classnames?' ' + props.classnames:''}`}>
        {props.children}
    </props.tag>
)

export default Title;