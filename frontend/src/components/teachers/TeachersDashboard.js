import React, { Component } from "react";
import Teachers from "./Techers";
import Form from "./Form";

class TeachersDashboard extends Component {
  render() {
    return (
      <div>
        <Form />
        <Teachers />
      </div>
    );
  }
}

export default TeachersDashboard;
