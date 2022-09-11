import React from 'react'
import ExperienceItem from './ExperienceItem'
import Section from './Utils/Section'

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
        <button onClick={onAdd}>Add</button>
    </Section>
  )
}

export default Experience
