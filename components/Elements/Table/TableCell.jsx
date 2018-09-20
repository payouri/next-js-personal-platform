import {Component} from 'react';

class TableCell extends Component {

    constructor(props) {

        super(props);


    }

    render() {
        return (
            <td data-cell={this.props.data}>{this.props.data}</td>
        )
    }
}

export default TableCell;