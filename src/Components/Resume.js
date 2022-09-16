import uniqid from "uniqid";
import React, { useState, useRef } from "react";
import ResumeTemplate from "./Utils/ResumeTemplate";
import ResumeForm from "./ResumeForm";
import Preview from "./Preview/Preview";
import styledComponents from "styled-components";
import LoadExample from "./Preview/LoadExample";

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

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target

    //Maps through all experience entry, if entry is clicked, user can edit
    setResume((prevState) => {
      const newExp = prevState.experience.map((expItem) => {
        if (expItem.id === id) {
          return { ...expItem, [name]: value }
        }
        return expItem
      })
      return { ...prevState, experience: [...newExp] }
    })
  }

  //Create new experience form with unique id
  const handleAddExperience = () => {
    setResume((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: uniqid(),
          position: '',
          company: '',
          from: '',
          to: '',
        }
      ]
    }))
  }

  //Removes Experience entry, ids not clicked will be displayed
  const handleDeleteExperience = (id) => {
    setResume((prevState) => {
      const newExp = prevState.experience.filter(
        (expItem) => expItem.id !== id
      )
      return { ...prevState, experience: [...newExp] }
    })
  }

  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target

    setResume((prevState) => {
      const newEdu = prevState.education.map((eduItem) => {
        if (eduItem.id === id) {
          return { ...eduItem, [name]: value }
        }
        return eduItem
      })
      return { ...prevState, education: [...newEdu] }
    })
  }

  const handleAddEducation = () => {
    setResume((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uniqid(),
          course: '',
          school: '',
          from: '',
          to: ''
        }
      ]
    }))
  }

  const handleDeleteEducation = (id) => {
    setResume((prevState) => {
      const newEdu = prevState.education.filter(
        (eduItem) => eduItem.id !== id
      )
      return { ...prevState, education: [...newEdu] }
    })
  }

  const preview = useRef();

  const handleLoadExample = () => {
    setResume(LoadExample)
  }

  const handleReset = () => {
    setResume(ResumeTemplate)
  }
  return (
    <Container>
      <ResumeForm
        resume={resume}
        onChangePersonal={handleChangePersonal}
        onChangeExperience={handleChangeExperience}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience}
        onChangeEducation={handleChangeEducation}
        onAddEducation={handleAddEducation}
        onDeleteEducation={handleDeleteEducation}
        onLoadExample={handleLoadExample}
        onReset={handleReset}
      />
      <Preview
        resume={resume} ref={preview}
      />
    </Container>
  )
}

export default Resume

const Container = styledComponents.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 40px;
padding:2rem;
`