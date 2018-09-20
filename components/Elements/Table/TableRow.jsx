import {Component} from 'react';

class TableRow extends Component {

    constructor(props) {

        super(props);


    }

    render() {
        return (
            <tr>{this.props.children}</tr>
        )
    }
}

export default TableRow;