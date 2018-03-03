import React from "react";
import PropTypes from "prop-types";
import { push } from "react-router-redux";
import { addNew } from "../actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class AddTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onAddTask = this.onAddTask.bind(this);
    }

    onChangeTitle(evt) {
        this.setState({
            title: evt.target.value
        });
    }

    onAddTask() {
        this.props.dispatch(addNew(this.state.title));
        this.props.onSuccessRedirect && this.props.dispatch(push(this.props.onSuccessRedirect));
    }

    render() {
        return (
            <div>
                <input
                    className="input"
                    onChange={this.onChangeTitle}
                    value={this.state.title}
                />
                <button className="button button--normal" onClick={this.onAddTask}>
                    Save
                </button>
            </div>
        );
    }
}

AddTaskForm.propTypes = {
    onSuccessRedirect: PropTypes.string
};

export default withRouter(
    connect()(AddTaskForm)
);
