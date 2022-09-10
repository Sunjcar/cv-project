import React from "react";
import styled, { css } from "styled-components";

const Section = ({
  padding,
  title,
  children,
  titlePadding,
  contrastTitle,
  direction,
}) => {
  return (
    <SectionWrapper padding={padding}>
      <Title padding={titlePadding} contrast={contrastTitle}>
        {title}
      </Title>
      <Children direction={direction}>{children}</Children>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  margin-bottom: 2rem;
`;

const Title = styled.h3`
  padding: 0;
  ${(props) =>
    props.contrast &&
    css`
      border-bottom: 1px solid "#ccc";
      color: #143E72;
    `}
`;

const Children = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction === "column" && "column"};
  gap: 1rem;
`;

export default Section;