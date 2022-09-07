import uniqid from "uniqid";
import React, { Component, useState } from "react";
import AddCourse from "./AddCourse";
import EducationExp from "./EducationExp";
import AddWork from "./AddWork";
import WorkExperience from "./WorkExperience";
import PersonalInfo from "./PersonalInfo";
import PersonalExp from "./PersonalExp";
import ResumeTemplate from "./Utils/ResumeTemplate";
import ResumeForm from "./ResumeForm";



const Resume = () => {
  const [resume, setResume] = useState(ResumeTemplate)

  const handleChangePersonal = (e) => {
    const { name, value } = e.target

    setResume((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      }
    }))

  }

  return (
    <div>
      <ResumeForm
        resume={resume}
        onChangePersonal={handleChangePersonal} />
    </div>
  )
}

export default Resume

