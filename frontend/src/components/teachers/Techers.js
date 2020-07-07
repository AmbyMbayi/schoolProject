import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getTeachers } from "../../actions/TeachersActions";

class Teachers extends Component {
  static propTypes = {
    teachers: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getTeachers();
  }
  render() {
    return (
      <div>
        <h3>Techers List</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.props.teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.name}</td>
                <td>{teacher.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  teachers: state.teachers.teachers,
});
export default connect(mapStateToProps, { getTeachers })(Teachers);
