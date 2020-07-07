import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTeacher } from "../../actions/TeachersActions";

class Form extends Component {
  state = {
    name: "",
    email: "",
  };

  static propTypes = {
    addTeacher: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email } = this.state;
    const teacher = { name, email };
    this.props.addTeacher(teacher);

    this.setState({
      name: "",
      email: "",
    });
  };

  render() {
    const { name, email } = this.state;
    return (
      <div className="card card-body mt-4 m-4">
        <form onSubmit={this.onSubmit}>
          <h2>Add Teachers</h2>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              name="email"
              type="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-sm">submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addTeacher })(Form);
