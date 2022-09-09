import React from 'react'
import Input from './Utils/Input';

const EducationItem = ({ id, educationItem, onChange, onDelete }) => {
  return (
    <>
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="course"
        placeholder="Course/Degree"
        value={educationItem.course}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="school"
        placeholder="Degree"
        value={educationItem.school}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="from"
        placeholder="From"
        value={educationItem.from}
      />
      <Input
        onChange={(e) => onChange(e, id)}
        type="text"
        name="to"
        placeholder="To"
        value={educationItem.to}
      />
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
};

export default EducationItem;