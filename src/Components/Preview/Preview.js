import React, { Component } from 'react'
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
padding: 50px;
width: 595px;
min-width: 595px;
height: 842px;
border-radius: 2px;
border: 1px solid black;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: flex;
flex-direction: column;
`;