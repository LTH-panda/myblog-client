import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import CareerItem from "./CareerItem";

const CareerListBlock = styled.ul`
  display: flex;
  flex-direction: column;
  li {
    border-bottom: 1px solid ${OpenColor.gray[5]};
  }
  li:last-child {
    border: none;
  }
`;

const CareerList = ({ careers }) => {
  return (
    <CareerListBlock>
      {careers &&
        careers.map((career) => (
          <CareerItem
            id={career._id}
            title={career.title}
            desc={career.desc}
            during={career.during}
            key={career._id}
          />
        ))}
    </CareerListBlock>
  );
};

export default CareerList;
