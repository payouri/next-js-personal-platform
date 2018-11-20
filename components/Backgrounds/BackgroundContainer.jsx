const Background = props => {
    const {url, position, size, repeat, color, children} = props;
    return (
        <div style={{
            backgroundImage: `url(${url?url:''})`,
            backgroundPosition: position?position:'center',
            backgroundSize: size?size:'cover',
            backgroundRepeat: repeat?repeat:'no-repeat',
            backgroundColor: `${color?color:'transparent'}`}}
        >
            {children}
        </div>
    )

}

export default Background;