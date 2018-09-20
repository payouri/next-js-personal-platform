import {Component} from 'react';

class TableFoot extends Component {

    constructor(props) {

        super(props);


    }

    render() {
        return (
            <tfoot>{this.props.children}</tfoot>
        )
    }
}

export default TableFoot;