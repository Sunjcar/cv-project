import React from "react";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";
import DownloadPDF from "./Preview/DownloadPDF";

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
        <Button>
          <button className="load-example" onClick={onLoadExample}> Load Example </button>
          <button className="reset-form" onClick={onReset}> Reset Form</button>
          <DownloadPDF rootElementId={'pdf-download'} downloadFileName='resume'/>
        </Button>
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
const Button = styled.div`
display:flex;
justify-content: space-around;
`
export default ResumeForm