import uniqid from "uniqid";
import React, { useState } from "react";
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
  return (
    <div>
      <ResumeForm
        resume={resume}
        onChangePersonal={handleChangePersonal}
        onChangeExperience={handleChangeExperience}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience} />
    </div>
  )
}

export default Resume

