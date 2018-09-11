import Observer from '@researchgate/react-intersection-observer';
import { isArray, isString } from 'util';


function handleOnChange(e) {

    e.isIntersecting?e.target.src = e.target.getAttribute('data-src'):void(0);

}

const options = {
    root: null,
    onChange: handleOnChange,
    rootMargin: '0px 0px 0px',
}

const getSrcs = srcs => {
    let srcset = '';
    for(let src of srcs) {
        isString(src) && src !== '' ? srcset += `${src} `: '';
    }
    return srcset;
}

const LazyImg = props => (

    !isArray(props.src)
        ?
        <Observer {...options}>
            <img data-src={props.src} alt={props.title}/>
        </Observer>
        :
        <Observer {...options}>
            <img data-src={props.src[0]} alt={props.title} srcset={getSrcs(props.src)}/>
        </Observer>

);

export default LazyImg;