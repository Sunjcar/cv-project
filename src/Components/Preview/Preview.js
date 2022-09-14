import React, {Component} from 'react'
import styled from 'styled-components'
import ContentWrap from './ContentWrap'
import Header from './Header'


export class Preview extends Component {
    render() {
        const { resume } = this.props
        return (
            <PreviewWrapper>
                <Header personalInfo={resume.personalInfo} />
                <ContentWrap
                    personalInfo={resume.personalInfo}
                    experience={resume.experience}
                    education={resume.education}
                />
            </PreviewWrapper>
        )
    }
}

export default Preview

const PreviewWrapper = styled.div`
width:595px;
padding: 2rem;
border-radius: 2px;
border: 2px solid #81aebb;
display: flex;
flex-direction: column;
height: 800px;
`;