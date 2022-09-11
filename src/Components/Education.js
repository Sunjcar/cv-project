import React from 'react'
import Section from './Utils/Section';
import EducationItem from './EducationItem';

const Education = ({ education, onChange, onAdd, onDelete }) => {
  const educationItems = education.map((educationItem) => (
    <EducationItem
      key={educationItem.id}
      id={educationItem.id}
      educationItem={educationItem}
      onChange={onChange}
      onDelete={onDelete}
    />
  ))
  return (
    <Section title="Education" titlePadding="0.5rem" direction="column">
      {educationItems}
      <button onClick={onAdd}>Add</button>
    </Section>
  );
};

export default Education

