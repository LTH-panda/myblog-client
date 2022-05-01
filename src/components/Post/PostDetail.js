import React from "react";
import styled from "styled-components";
import { Viewer } from "@toast-ui/react-editor";

const PostDetailBlock = styled.div``;

const PostDetail = () => {
  return (
    <PostDetailBlock>
      <Viewer />
    </PostDetailBlock>
  );
};

export default PostDetail;
