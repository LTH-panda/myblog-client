import { Button } from "components/Shared";
import React from "react";
import styled from "styled-components";

const ButtonsBlock = styled.div`
  display: flex;
  gap: 1rem;
`;

const EditButton = styled(Button)``;
const RemoveButton = styled(Button)``;

const PostActionButtons = () => {
  return (
    <ButtonsBlock>
      <EditButton>수정</EditButton>
      <RemoveButton>삭제</RemoveButton>
    </ButtonsBlock>
  );
};

export default PostActionButtons;
