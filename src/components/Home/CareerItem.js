import Button from "components/Shared/Button";
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
  background: ${OpenColor.indigo[5]};
  color: #fff;
`;

const CareerItem = ({ title, desc, during, id }) => {
  const { editmode } = useSelector((state) => state.ui);
  return (
    <CareerItemBlock>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      <During>{during}</During>
      {editmode && (
        <Link href={{ pathname: "/write/career", query: { id } }}>
          <a>
            <RemoveButton>수정</RemoveButton>
          </a>
        </Link>
      )}
    </CareerItemBlock>
  );
};

export default CareerItem;
