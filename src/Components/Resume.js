import uniqid from "uniqid";
import React, { Component } from "react";
import AddCourse from "./AddCourse";
import EducationExp from "./EducationExp";
import AddWork from "./AddWork";
import WorkExperience from "./WorkExperience";
import PersonalInfo from "./PersonalInfo";
import PersonalExp from "./PersonalExp";

export class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {
        name: "John Doe",
        currentJob: "fewafe",
        email: "Some@gmail.com",
        phoneNumber: "123456789",
        address: "1234 st",
      },
      allInfo: [],
      addInfo: true,
      education: {
        degreeName: "Web Dev",
        schoolName: "The Odin Project",
        dateStart: "May 2022",
        dateEnd: "June 2022",
      },
      allEdu: [],
      addEdu: true,
      experience: {
        companyName: "Google",
        position: "CEO",
        tasks:
          "Lorem ipsum dolor sit  dolore magna aliqua.",
        from: "May 2022",
        to: "June 2022",
      },
      allJobs: [],
      addJob: true,
    };

    //Bind Personal Info Events
    this.changeInfo = this.changeInfo.bind(this);
    this.submitPersonalInfo = this.submitPersonalInfo.bind(this);
    this.editPersonalInfo = this.editPersonalInfo.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
    //Bind Education Events
    this.changeEdu = this.changeEdu.bind(this);
    this.submitEdu = this.submitEdu.bind(this);
    this.eduEdit = this.eduEdit.bind(this);
    this.submitEduBtn = this.submitEduBtn.bind(this);
    //Bind Experience Events
    this.changeWork = this.changeWork.bind(this);
    this.submitWork = this.submitWork.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.submitButton = this.submitButton.bind(this);
  }

  changeInfo = (e) => {
    this.setState({
      personalInfo: {
        ...this.state.personalInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  editPersonalInfo = (e, id) => {
    const { name, value } = e.target;
    this.setState({
      allInfo: this.state.allInfo.map((personalInfo) => {
        if (personalInfo.id === id) {
          personalInfo[name.toString()] = value;
        }
        return personalInfo;
      }),
    });
  };

  submitPersonalInfo = (e) => {
    e.preventDefault();
    const newInfo = {
      ...this.state.personalInfo,
      id: uniqid(),
    };
    this.setState({
      allInfo: this.state.allInfo.concat(newInfo),
      personalInfo: {
        name: "",
        currentJob: "",
        email: "",
        phoneNumber: "",
        address: "",
      },
    });
  };

  submitInfo = () => {
    this.setState((prevState) => ({
      addInfo: !prevState.addInfo,
    }));
  };

  changeEdu = (e) => {
    this.setState({
      education: {
        ...this.state.education,
        [e.target.name]: e.target.value,
      },
    });
  };

  eduEdit = (e, id) => {
    const { name, value } = e.target;
    this.setState({
      allEdu: this.state.allEdu.map((education) => {
        if (education.id === id) {
          education[name.toString()] = value;
        }
        return education;
      }),
    });
  };

  submitEdu = (e) => {
    e.preventDefault();
    const newEdu = {
      ...this.state.education,
      id: uniqid(),
    };

    this.setState({
      allEdu: this.state.allEdu.concat(newEdu),
      education: {
        degreeName: "",
        schoolName: "",
        dateStart: "",
        dateEnd: "",
      },
    });
  };

  submitEduBtn = () => {
    this.setState((prevState) => ({
      addEdu: !prevState.addEdu,
    }));
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
    const { name, currentJob, email, phoneNumber, address } =
      this.state.personalInfo;
    const { companyName, position, from, to, tasks } = this.state.experience;
    const { degreeName, schoolName, dateStart, dateEnd } = this.state.education;
    let add = {};
    return (
      <div className="Resume">
        <div className="Personal-Information" onSubmit={this.onSubmitCv}>
          <h3>
            {!this.state.addInfo ? (
              <></>
            ) : (
              <PersonalInfo
                add={add}
                changeInfo={this.changeInfo}
                submitPersonalInfo={this.submitPersonalInfo}
                name={name}
                currentJob={currentJob}
                email={email}
                phoneNumber={phoneNumber}
                address={address}
              />
            )}
            {!this.state.addEdu ? (
              <></>
            ) : (
              <AddCourse
                add={add}
                changeEdu={this.changeEdu}
                submitEdu={this.submitEdu}
                degreeName={degreeName}
                schoolName={schoolName}
                dateStart={dateStart}
                dateEnd={dateEnd}
              />
            )}
            <div>
              <button onClick={this.submitEduBtn}>
                {this.state.addEdu ? "Cancel" : "Add Edu"}
              </button>
            </div>
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
            <div>
              <button onClick={this.submitButton}>
                {this.state.addJob ? "Cancel" : "Add Job"}
              </button>
            </div>
          </h3>
        </div>
        <div className="cv-view">
          {this.state.allInfo.length > 0 ? (
            <PersonalExp
              allInfo={this.state.allInfo}
              editPersonalInfo={this.editPersonalInfo}
            />
          ) : (
            <></>
          )}

          {this.state.allEdu.length > 0 ? (
            <EducationExp allEdu={this.state.allEdu} eduEdit={this.eduEdit} />
          ) : (
            <></>
          )}
          {this.state.allJobs.length > 0 ? (
            <WorkExperience
              allJobs={this.state.allJobs}
              handleEdit={this.handleEdit}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

export default Resume;