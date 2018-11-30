import {Component} from 'react';
import './Loader.css';

class Loader extends Component {
    state = { 
        loading: this.props.loading?true:false || true
     }
    render() { 
        return ( 
            <div className={`loader ${this.state.loading?'loading':''}`}></div>
        );
    }
}
 
export default Loader;