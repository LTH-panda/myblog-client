import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";

const TagsBlock = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;
`;

const TagItemBlock = styled.li`
  background: ${OpenColor.indigo[3]};
  border-radius: 1rem;
  padding: 0.5rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  color: #fff;
  font-size: 0.8rem;
`;

const TagItem = () => {
  return <TagItemBlock>태그1</TagItemBlock>;
};

const Tags = () => {
  return (
    <TagsBlock>
      <TagItem />
      <TagItem />
      <TagItem />
    </TagsBlock>
  );
};

export default Tags;
