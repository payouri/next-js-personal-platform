import './AspectRatio.css';

const AspectRatio = props => {
    let {ratio} = props;
    if(!ratio || typeof ratio != 'string') {
        ratio = '4by3';
    }
    return (
        <div style={{}} className={`aspect-ratio-outer is-${ratio}`}>
            <div className="aspect-ratio-inner">
                {props.children}
            </div>
        </div>
    )
}
export default AspectRatio;