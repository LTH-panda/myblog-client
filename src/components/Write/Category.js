import React from "react";
import styled from "styled-components";

const CategoryBlock = styled.select`
  width: 80px;
  height: 40px;
  font-size: 1rem;
`;

const Category = ({ category, handleCategory }) => {
  return (
    <CategoryBlock value={category} onChange={handleCategory}>
      <option value="Tech">Tech</option>
      <option value="Start-Up">Start-Up</option>
      <option value="Log">Log</option>
    </CategoryBlock>
  );
};

export default Category;
