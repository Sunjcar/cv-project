import React, { Component } from 'react'
import styled from 'styled-components'
import ContentWrap from './ContentWrap'
import Header from './Header'


export class Preview extends Component {
    render() {
        const { resume } = this.props
        return (
            <PreviewWrapper>
                <View>
                    <Header personalInfo={resume.personalInfo} />
                    <ContentWrap
                        personalInfo={resume.personalInfo}
                        experience={resume.experience}
                        education={resume.education}
                    />
                </View>
            </PreviewWrapper>
        )
    }
}

export default Preview

const PreviewWrapper = styled.div`
width:595px;
`;

const View = styled.div`
padding: 2rem;
border-radius: 5px;
border: 2px solid #81aebb;
display: flex;
flex-direction: column;
`