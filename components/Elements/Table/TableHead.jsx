import {Component} from 'react';

class TableHead extends Component {

    constructor(props) {

        super(props);


    }

    render() {
        return (
            <thead>

                <th data-cell={this.props.heading}>{this.props.heading}</th>
            </thead>
        )
    }
}

export default TableHead;