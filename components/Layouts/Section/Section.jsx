import './Section.css';

const Section = props => (

    <div className={`section${' ' + props.classnames}`}>
        {props.children}
    </div>

);

export default Section;