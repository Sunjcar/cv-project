import EducationInfo from "./EducationInfo";
import GeneralInfo from "./GeneralInfo";
import WorkInfo from "./WorkInfo";
import uniqid from "uniqid";
import React, { Component } from "react";
import AddWork from "./AddWork";
import WorkExperience from "./WorkExperience";

export class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Gol D. Roger",
      currentJob: "Pirate King",
      email: "someone@email.com",
      phoneNumber: "123456789",
      address: "Some ST UK ",
      degreeName: "Full Stack Dev",
      courseName: "The Odin Project",
      dateStart: "2022",
      dateEnd: "Present",
      experience: {
        companyName: "",
        position: "",
        tasks: "",
        from: "",
        to: "",
      },
      allJobs: [],
      addJob: true,
    };

    this.changeWork = this.changeWork.bind(this);
    this.submitWork = this.submitWork.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.submitButton = this.submitButton.bind(this);
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleJobChange = (e) => {
    this.setState({
      currentJob: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleNumberChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ phoneNumber: e.target.value });
    }
  };

  handleAddressChange = (e) => {
    this.setState({
      address: e.target.value,
    });
  };

  handleSchoolChange = (e) => {
    this.setState({
      schoolName: e.target.value,
    });
  };

  handleDegreeChange = (e) => {
    this.setState({
      degreeName: e.target.value,
    });
  };

  handleDateChange = (e) => {
    this.setState({
      dateStart: e.target.value,
    });
  };

  handleDateEndChange = (e) => {
    this.setState({
      dateEnd: e.target.value,
    });
  };

  changeWork = (e) => {
    this.setState({
      experience: {
        ...this.state.experience,
        [e.target.name]: e.target.value,
      },
    });
  };
  submitWork = (e) => {
    e.preventDefault();
    const newJob = {
      ...this.state.experience,
      id: uniqid(),
    };

    this.setState({
      allJobs: this.state.allJobs.concat(newJob),
      experience: {
        companyName: "",
        position: "",
        tasks: "",
        from: "",
        to: "",
      },
    });
  };

  handleEdit = (e, id) => {
    const { name, value } = e.target;
    this.setState({
      allJobs: this.state.allJobs.map((experience) => {
        if (experience.id === id) {
          experience[name.toString()] = value;
        }
        return experience;
      }),
    });
  };

  submitButton = () => {
    this.setState((prevState) => ({
      addJob: !prevState.addJob,
    }));
  };

  render() {
    const {
      name,
      currentJob,
      email,
      phoneNumber,
      address,
      schoolName,
      degreeName,
      dateStart,
      dateEnd,
    } = this.state;

    const { companyName, position, from, to, tasks } = this.state.experience;

    let add = {};
    return (
      <div className="Resume">
        <div className="Personal-Information" onSubmit={this.onSubmitCv}>
          <h3>
            <label htmlFor="userName" className="Name">
              Name
            </label>
            <input type="text" value={name} onChange={this.handleNameChange} />
            <label htmlFor="Current Job" className="Current-Job">
              {" "}
              Current Job{" "}
            </label>
            <input
              type="text"
              value={currentJob}
              onChange={this.handleJobChange}
            />
            <label htmlFor="userEmail" className="Email">
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={this.handleEmailChange}
            />
            <label htmlFor="userPhone" className="Phone">
              Phone Number
            </label>
            <input
              className="phoneNumber"
              type="text"
              value={phoneNumber}
              placeholder="123456789"
              onChange={this.handleNumberChange}
            />
            <label htmlFor="Address" className="Address">
              {" "}
              Address{" "}
            </label>
            <input
              type="text"
              value={address}
              onChange={this.handleAddressChange}
            />
          </h3>
          <h3 className="school-info">
            <label htmlFor="degree" className="degreeName">
              {" "}
              Course{" "}
            </label>
            <input
              type="text"
              value={degreeName}
              onChange={this.handleDegreeChange}
            />
            <label htmlFor="schoolName" className="schoolName">
              School
            </label>
            <input
              type="text"
              value={schoolName}
              onChange={this.handleSchoolChange}
            />
            <label htmlFor="dateOfStudy" className="dateOfStudy">
              {" "}
              From{" "}
            </label>
            <input
              type="text"
              minLength={4}
              maxLength={4}
              value={dateStart}
              onChange={this.handleDateChange}
            />
            <label htmlFor="dateOfStudy" className="dateOfStudy">
              {" "}
              To{" "}
            </label>
            <input
              type="text"
              minLength={4}
              value={dateEnd}
              onChange={this.handleDateEndChange}
            />
          </h3>
          <div>
            <h3>
              <button onClick={this.submitButton}>
                {this.state.addJob ? "Cancel" : "Add Job"}
              </button>
              {!this.state.addJob ? (
                <></>
              ) : (
                <AddWork
                  add={add}
                  changeWork={this.changeWork}
                  submitWork={this.submitWork}
                  companyName={companyName}
                  position={position}
                  tasks={tasks}
                  from={from}
                  to={to}
                />
              )}
              {this.state.allJobs.length > 0 ? (
                <WorkExperience
                  allJobs={this.state.allJobs}
                  handleEdit={this.handleEdit}
                />
              ) : (
                <></>
              )}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
