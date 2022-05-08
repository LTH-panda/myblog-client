import { CareerList } from "components/Home";
import Button from "components/Shared/Button";
import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import useCareer from "hooks/useCareer";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

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
const UpdateButton = styled(Button)`
  width: 100%;
  background: ${OpenColor.green[5]};
  color: #fff;
`;
const RemoveButton = styled(Button)`
  width: 100%;
  background: ${OpenColor.red[5]};
  color: #fff;
`;

const WriteCareer = () => {
  const {
    title,
    desc,
    during,
    id,
    onChange,
    onSubmit,
    handleRemove,
    handleUpdate,
  } = useCareer();

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
        {id ? (
          <UpdateButton type="button" onClick={handleUpdate}>
            수정
          </UpdateButton>
        ) : (
          <WriteButton type="submit">생성</WriteButton>
        )}
        <RemoveButton type="button" onClick={handleRemove}>
          삭제
        </RemoveButton>
      </StyledForm>
    </WriteCareerBlock>
  );
};

export default WriteCareer;
