import React, { Component, useState } from 'react'
import Input from './Utils/Input'
import Section from './Utils/Section'
import TextArea from './Utils/Textarea'


const PersonalInfo = ({ personalInfo, onChange }) => {
  return (
    <Section
      title="Personal Information"
      titlePadding="0.5rem"
      direction="column">
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='name'
        placeholder='Full Name'
        value={personalInfo.name}
      />
      <Input
        onChange={(e) => onChange(e)}
        type='text'
        name='title'
        placeholder='Title'
        value={personalInfo.title}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="address"
        placeholder="Address"
        value={personalInfo.address}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="phoneNumber"
        placeholder="Phone number"
        value={personalInfo.phoneNumber}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="email"
        placeholder="Email"
        value={personalInfo.email}
      />
      <TextArea
        onChange={(e) => onChange(e)}
        name="description"
        placeholder="Description"
        value={personalInfo.description}
      />
    </Section>
  )
}

export default PersonalInfo
