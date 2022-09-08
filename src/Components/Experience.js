import React from 'react'
import ExperienceItem from './ExperienceItem'
import Section from './Utils/Section'
import styled from 'styled-components'

const Experience = ({ experience, onChange, onAdd, onDelete }) => {
  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItem
      key={experienceItem.id}
      id={experienceItem.id}
      experienceItem={experienceItem}
      onChange={onChange}
      onDelete={onDelete}
    />
  ));
  return (
    <Section title='Experience' titlePadding='.5rem' direction='column'>
      {experienceItems}
      <ButtonWrapper>
        <button onClick={onAdd}>Add</button>
      </ButtonWrapper>
    </Section>
  )
}

export default Experience

const ButtonWrapper = styled.button`
padding: .5rem;
border-radius:.5rem
`