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
  onLoadExample,
  onReset,
}) => {
  return (
    <FormWrapper>
      <Form>
        <div>
          <button onClick={onLoadExample}> Load Example </button>
          <button onClick={onReset}> Reset Form</button>
        </div>
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
      </Form>
    </FormWrapper>

  )
}

const FormWrapper = styled.div`
width:595px;`

const Form = styled.div`
border: 2px solid #81aebb;
border-radius: 5px;
padding: 30px;
display: flex;
flex-direction: column;
grid-gap: 25px;
gap: 25px;
`
export default ResumeForm