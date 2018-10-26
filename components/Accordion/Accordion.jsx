import React, { Component } from 'react';

import IconButton from '../Elements/IconButton';

import './Accordion.css';

export const PaneToggler = props => (
    <IconButton icon={props.icon} onClick={props.onClick}/>
);

export const LabelPane = props => (
    <dt ref={props.passRef} className='title is-5'>{props.title}</dt>
);

export const HideAblePane = props => (
    <dd ref={props.passRef} className='is-size-6'>{props.children}</dd>
);

export const PaneContainer = props => {
    const status = props.open ? ' open' : '',
        boxed = props.boxed ? ' box' : ''
    return (
        <dl className={'accordion' + status + boxed}>{props.children}</dl>
    )
};

class Accordion extends Component {
    static PaneToggler = PaneToggler;
    static LabelPane = LabelPane;
    static HideAblePane = HideAblePane;
    static PaneContainer = PaneContainer;


    
    componentWillMount() {
        
    }
    

    static defaultProps = {
        open: false,
        title: 'Placeholder Accordion Title',
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }

    constructor(props) {
        super(props)
        this.state = {
            isOpen: this.props.open || false
        }
        this.minHeight;
        this.expandedHeight;
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <PaneContainer style={{height: this}} boxed open={this.state.isOpen}>
                <PaneToggler icon={this.state.isOpen?'minus':'plus'} onClick={this.handleClick}/>
                <LabelPane title={this.props.title}/>
                <HideAblePane>
                    {this.props.children}
                </HideAblePane>
            </PaneContainer>
        )
    }
}

export default Accordion;