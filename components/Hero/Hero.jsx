const Hero = props => {

    return (
        <section style={props.style} className={`hero${' ' + props.classnames}`}>
            {props.head ?
                <div className="hero-foot">
                    {props.head}
                </div>
                : '' }
            <div className="hero-body">
                {props.children}
            </div>
            {props.foot ?
                <div className="hero-foot">
                    {props.foot}
                </div>
                : '' }
        </section>
    );

}

export default Hero;