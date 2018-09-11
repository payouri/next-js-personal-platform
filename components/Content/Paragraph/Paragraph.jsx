const Paragraph = props => (
    <props.tag className={`${props.classnames?' ' + props.classnames:''}`}>
        {props.children}
    </props.tag>
)

export default Paragraph;