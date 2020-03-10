import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        label: ''
    };

    onChange = (event) => {
        const label = event.target.value;
        this.setState({label});
        this.props.onChange(label);
    };

    render() {

        return <input placeholder="type to search"
                      className="search-input"
                      onChange={this.onChange}
                      value={this.state.label}
        />
    }
}