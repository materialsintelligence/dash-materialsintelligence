import React, {Component} from 'react';
import { Creatable } from 'react-select';
import PropTypes from 'prop-types';

/**
 * ReactSelect extends react-select to work with dash
 */
export default class DropdownCreatable extends Component {
    constructor(props) {
        super(props);
        this.state = { value: null };
    }

    updateState(element) {
        this.setState({ value: element });
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            value: nextProps.value
            });
    }

    render() {
        return <Creatable {...this.props}
                       value={this.state.value}
                       onChange={this.updateState.bind(this)}
                       />
    }
}

DropdownCreatable.propTypes = {
    /**
     * select options
     */
    options: PropTypes.array,

    /**
     * the id
     */
    id: PropTypes.string,

    /**
     * multi-select or not
     */
    multi: PropTypes.bool
};