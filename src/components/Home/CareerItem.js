import { Button } from "components/Shared";
import Link from "next/link";
import OpenColor from "open-color";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import media from "styles/styles-utils";

const CareerItemBlock = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;

  ${media.tablet} {
    flex-direction: row;
  }
`;
const Title = styled.div`
  font-weight: bold;
  padding-right: 0.5rem;
  border-right: 3px solid ${OpenColor.indigo[5]};
`;
const Desc = styled.div``;
const During = styled.div``;
const RemoveButton = styled(Button)`
  background: ${OpenColor.red[5]};
  color: #fff;
`;

const CareerItem = ({ title, desc, during }) => {
  const { editmode } = useSelector((state) => state.ui);
  return (
    <CareerItemBlock>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      <During>{during}</During>
      {editmode && (
        <Link href="/write/career">
          <RemoveButton>삭제</RemoveButton>
        </Link>
      )}
    </CareerItemBlock>
  );
};

export default CareerItem;
