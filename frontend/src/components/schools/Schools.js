import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getSchool, deleteSchool } from "../../actions/schoolActions";

export class Schools extends Component {
  static propTypes = {
    school: PropTypes.array.isRequired,
    getSchool: PropTypes.func.isRequired,
    deleteSchool: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getSchool();
  }
  render() {
    return (
      <Fragment>
        <h2>Schools</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.school.map((sch) => (
              <tr key={sch.id}>
                <td>{sch.name}</td>
                <td>{sch.email}</td>

                <td>
                  <Link
                    to={`/school/${sch.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    Edit
                  </Link>
                </td>

                <td>
                  <button
                    onClick={this.props.deleteSchool.bind(this, sch.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  school: state.school.school,
});

export default connect(mapStateToProps, { getSchool, deleteSchool })(Schools);
