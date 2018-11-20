import {Component} from 'react';
import {throttleEvent} from '../../../functions/utilities';

import './Grid.css';

class Grid extends Component {
    throttle = false;
    styles = {};
    breakpoints = [];
    gridRef = React.createRef();
    componentDidMount() {
        this.calcBreakpoints();
        if(global && global.document)
            global.addEventListener('resize', throttleEvent(this.calcBreakpoints.bind(this), 80));
    }
    componentWillUnmount() {
        if(global && global.document)
            global.removeEventListener('resize', this.calcBreakpoints.bind(this));
    }
    constructor(props) {
        super(props);

        this.styles = {
            gridTemplateColumns: this.props.cols || 'auto',
            gridTemplateRows: this.props.rows || 'auto',
            gridGap: this.props.gap || 10,
        }
        this.breakpoints = (props.breakpoints ? Array.isArray(props.breakpoints) ? props.breakpoints : [props.breakpoints] : [564, 768, 1024]).sort((a, b) => b - a);
    }

    resizeGrid(size) {
        
        console.log(size);
        switch(size) {
            case 'mobile':
                this.gridRef.current.style.gridTemplateColumns = '1fr';
                break;
            case 'tablet':
                this.gridRef.current.style.gridTemplateColumns = '1fr 1fr';
                break;
            case 'large':
                this.gridRef.current.style.gridTemplateColumns = '1fr 1fr 1fr';
                break;
            case 'desktop':
                this.gridRef.current.style.gridTemplateColumns = this.props.cols;
                break;
            default: 
                break;
        }

        
    }
    calcBreakpoints() {
        if(matchMedia && innerWidth) {
            const MQs = {
                small: matchMedia(`(max-width: ${this.breakpoints[this.breakpoints.length - 1]}px)`),
                medium: matchMedia(`(max-width: ${this.breakpoints[this.breakpoints.length - 2]}px)`),
                large: matchMedia(`(max-width: ${this.breakpoints[this.breakpoints.length - 3]}px)`),
                larger: matchMedia(`(min-width: ${this.breakpoints[this.breakpoints.length - 3]}px)`)
            };
            if(MQs.small.matches) {
                return this.resizeGrid('mobile');
            }else if(MQs.medium.matches) {
                return this.resizeGrid('tablet');
            }else if(MQs.large.matches) {
                return this.resizeGrid('large');
            }else {
                return this.resizeGrid('desktop');
            }
        }
    }
    render() {
        return (
            <div ref={this.gridRef} style={this.styles} className='grid'>
                {this.props.children}
            </div>
        )
    }

}

export default Grid;