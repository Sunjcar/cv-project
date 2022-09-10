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
  width: 210mm;
  height: 297mm;
  position: sticky;
  top: 10px;
  display: grid;
  grid-template-columns: 150mm;
  grid-template-rows: 35mm 262mm;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;