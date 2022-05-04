import { CareerList } from "components/Home";
import { Button } from "components/Shared";
import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import useCareer from "hooks/useCareer";

const WriteCareerBlock = styled.div``;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledInput = styled.input`
  padding: 0.3rem;
`;
const WriteButton = styled(Button)`
  width: 100%;
  background: ${OpenColor.indigo[5]};
  color: #fff;
`;

const WriteCareer = () => {
  const { title, desc, during, onChange, onSubmit } = useCareer();

  return (
    <WriteCareerBlock>
      <StyledForm onSubmit={onSubmit}>
        <StyledInput
          placeholder="title"
          value={title}
          name="title"
          onChange={onChange}
        />
        <StyledInput
          placeholder="desc"
          value={desc}
          name="desc"
          onChange={onChange}
        />
        <StyledInput
          placeholder="during"
          value={during}
          name="during"
          onChange={onChange}
        />
        <WriteButton type="submit">생성</WriteButton>
      </StyledForm>
    </WriteCareerBlock>
  );
};

export default WriteCareer;
