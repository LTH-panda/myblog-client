import useSearchBar from "hooks/useSearchBar";
import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const SearchBarBlock = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  padding: 1rem;
  background: ${OpenColor.indigo[1]};
`;

const SearchBar = () => {
  const { searchbar } = useSearchBar();
  if (searchbar)
    return <SearchBarBlock placeholder="Enter Your Search Topic" />;
};

export default SearchBar;
