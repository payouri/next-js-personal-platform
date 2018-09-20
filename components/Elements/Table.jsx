import {Component} from 'react';

class Table extends Component {

    
    render() {
        const classnames = !props.classnames ? '' : ' ' + props.classnames;
        return (
            <table className={`table ${classnames}`}>
                {this.props.children}
            </table>
        )
    }


}