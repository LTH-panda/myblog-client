import { Button } from "components/Shared";
import Link from "next/link";
import OpenColor from "open-color";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleEditmode } from "store/ui";
import styled from "styled-components";

const CareerActionButtons = () => {
  const { editmode } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const handleEditmode = useCallback(() => {
    dispatch(toggleEditmode());
  });

  return (
    <ButtonsBlock>
      <EditButton onClick={handleEditmode}>
        {editmode ? "완료" : "수정"}
      </EditButton>
      {editmode && (
        <Link href="/write/career">
          <a>
            <WriteButton>새 글</WriteButton>{" "}
          </a>
        </Link>
      )}
    </ButtonsBlock>
  );
};

export default CareerActionButtons;

const ButtonsBlock = styled.div`
  display: flex;
  gap: 1rem;
`;

const EditButton = styled(Button)`
  background: ${OpenColor.red[5]};
  color: #fff;
`;
const WriteButton = styled(Button)`
  background: ${OpenColor.green[5]};
  color: #fff;
`;
