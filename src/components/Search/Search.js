import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import useSearchBar from "hooks/useSearchBar";

const SearchBlock = styled.div`
  font-size: 1.5rem;
`;

const Search = () => {
  const { handleSearchbar } = useSearchBar();
  return (
    <SearchBlock onClick={handleSearchbar}>
      <MdSearch />
    </SearchBlock>
  );
};

export default Search;
