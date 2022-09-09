import React from 'react'
import Section from './Utils/Section';
import styled from 'styled-components';
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
      <ButtonWrapper>
        <button onClick={onAdd}>Add</button>
      </ButtonWrapper>
    </Section>
  );
};

export default Education

const ButtonWrapper = styled.button`
padding: .5rem;
border-radius:.5rem
`