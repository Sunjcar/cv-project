
import React from "react";
import Input from "./Utils/Input";
import styled from "styled-components";
import TextArea from "./Utils/Textarea";

const ExperienceItem = ({ id, experienceItem, onChange, onDelete }) => {
    return (
        <>
            <Input
                onChange={(e) => onChange(e, id)}
                type="text"
                name="position"
                placeholder="Position"
                value={experienceItem.position}
            />
            <Input
                onChange={(e) => onChange(e, id)}
                type="text"
                name="company"
                placeholder="Company"
                value={experienceItem.company}
            />
            <Input
                onChange={(e) => onChange(e, id)}
                type="text"
                name="from"
                placeholder="From"
                value={experienceItem.from}
            />
            <Input
                onChange={(e) => onChange(e, id)}
                type="text"
                name="to"
                placeholder="To"
                value={experienceItem.to}
            />
            <TextArea
                onChange={(e) => onChange(e, id)}
                type="text"
                name="to"
                placeholder="Description"
                value={experienceItem.description}
            />
            <ButtonWrapper>
                <button onClick={() => onDelete(id)}>Delete</button>
            </ButtonWrapper>
        </>
    );
};


export default ExperienceItem

const ButtonWrapper = styled.button`
padding: .5rem;
border-radius:.5rem
`