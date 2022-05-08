import { Button } from "components/Shared";
import usePostActions from "hooks/usePostActions";
import React from "react";
import styled from "styled-components";

const PostActionButtons = () => {
  const { handleRemove } = usePostActions();

  return (
    <ButtonsBlock>
      <EditButton>수정</EditButton>
      <RemoveButton onClick={handleRemove}>삭제</RemoveButton>
    </ButtonsBlock>
  );
};

export default PostActionButtons;

const ButtonsBlock = styled.div`
  display: flex;
  gap: 1rem;
`;

const EditButton = styled(Button)``;
const RemoveButton = styled(Button)``;
