import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";

const SearchBlock = styled.div`
  font-size: 1.5rem;
`;

const Search = () => {
  return (
    <SearchBlock>
      <MdSearch />
    </SearchBlock>
  );
};

export default Search;
