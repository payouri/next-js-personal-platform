
const Container = props => (

    <div className={`container${props.classnames?' ' + props.classnames:''}`}>
        {props.children}
    </div>

);

export default Container;