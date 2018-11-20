const Title = props => {

    let {title, size = 1, classnames, children, align, ...rest} = props;
    
    return rest.tag ?
    (
        <rest.tag style={{textAlign: align}} className={`title is-${size}${classnames?' ' + classnames:''}`}>
            {title || children}
        </rest.tag>
    )
    :
    (
        <div style={{textAlign: align}} className={`title is-${size}${classnames?' ' + classnames:''}`}>
            {title || children}
        </div>
    )
}

Title.defaultProps = {
    title: 'Hello World',
    size: 1,
}

export default Title;