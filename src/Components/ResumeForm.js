import React from "react";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";

const ResumeForm = ({
  resume,
  onChangePersonal,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
}) => {
  return (
    <FormWrapper>
      <PersonalInfo
        personalInfo={resume.personalInfo}
        onChange={onChangePersonal} />
      <Experience
        experience={resume.experience}
        onChange={onChangeExperience}
        onAdd={onAddExperience}
        onDelete={onDeleteExperience}
      />
      <Education
        education={resume.education}
        onChange={onChangeEducation}
        onAdd={onAddEducation}
        onDelete={onDeleteEducation}
      />
    </FormWrapper>
  )
}

const FormWrapper = styled.div`
    display:flex;
    flex-direction: column;
    gap: 1 rem;
    width: 150mm;
    padding: 2rem;
    border radius: 5px;
    background-color: gray
    box-shadow: rgba (0,0,0,0.5) 0px 5px 10px`
export default ResumeForm