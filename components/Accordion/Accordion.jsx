import React, { Component } from 'react';


const LabelPane = props => (
    <dl>{props.children}</dl>
);

export default LabelPane;

const hideablePane = props => (
    <dl>{props.children}</dl>
);

export default hideablePane;

class Accordion extends Component {
    static LabelPane = LabelPane;
    static hideAblePane = hideAblePane;
}