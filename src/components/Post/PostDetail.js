import dynamic from "next/dynamic";
import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
const Viewer = dynamic(
  () => import("@toast-ui/react-editor").then((m) => m.Viewer),
  {
    ssr: false,
  }
);

const PostDetailBlock = styled.div`
  width: 100%;
`;
const HeaderBlock = styled.div`
  padding-bottom: 1rem;
`;
const TitleBlock = styled.h1`
  font-size: 2.5rem;
`;
const DateBlock = styled.div`
  color: ${OpenColor.gray[7]};
`;

const PostDetail = ({ title, content, date }) => {
  return (
    <PostDetailBlock>
      <HeaderBlock>
        <TitleBlock>{title}</TitleBlock>
        <DateBlock>{date}</DateBlock>
      </HeaderBlock>
      <Viewer initialValue={content} />
    </PostDetailBlock>
  );
};

export default PostDetail;
