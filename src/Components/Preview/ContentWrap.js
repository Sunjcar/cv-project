import React from 'react'
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
            <div className='personal-description'>
                {personalInfo.description}
            </div>

            <Section title='Experience' direction='column' contrastTitle>
                {experienceItems}
            </Section>
            <Section title='Education' direction='column' contrastTitle>
                {educationItems}
            </Section>
        </div>
    )
}

export default ContentWrap
