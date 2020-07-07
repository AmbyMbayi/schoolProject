import React, { Component } from "react";

class Form extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    console.log("subTeacher");
  };
  render() {
    return (
      <div className="card card-body mt-4 m-4">
        <form onSubmit={this.onSubmit}>
          <h2>Add Teachers</h2>
          <div className="form-group">
            <label>Name</label>
            <input className="form-control" type="text" name="name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" name="email" type="email" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-sm">submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
