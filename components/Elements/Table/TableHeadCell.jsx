import {Component} from 'react';

class TableCell extends Component {

    constructor(props) {

        super(props);


    }

    render() {
        return (
            <th data-cell={this.props.data}>{this.props.data}</th>
        )
    }
}

export default TableCell;