import React, { Component } from 'react'
import styledComponents from 'styled-components'
import Section from '../Utils/Section'
import EducationItem from './EducationItem';
import ExperienceItem from './ExperienceItem';



const ContentWrap = ({ personalInfo, experience, education }) => {
    const experienceItems = experience.map((experienceItem) => (
        <ExperienceItem key={experienceItem.id} experienceItem={experienceItem} />
    ));

    const educationItems = education.map((educationItem) => (
        <EducationItem key={educationItem.id} educationItem={educationItem} />
    ));
    return (
        <div>
            <Wrapper>
                <Section title='Description' contrastTitle>
                    {personalInfo.description}
                </Section>
                <Section title='Experience' direction='column' contrastTitle>
                    {experienceItems}
                </Section>
                <Section title='Education' direction='column'  contrastTitle>
                    {educationItems}
                </Section>
            </Wrapper>
        </div>
    )
}

export default ContentWrap

const Wrapper = styledComponents.div`
padding: 2rem;
`