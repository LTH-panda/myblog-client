import dynamic from "next/dynamic";
import OpenColor from "open-color";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import PostActionButtons from "./PostActionButtons";
const Viewer = dynamic(
  () => import("@toast-ui/react-editor").then((m) => m.Viewer),
  {
    ssr: false,
  }
);

const PostDetail = ({ title, content, date }) => {
  const { user } = useSelector((state) => state.user);

  return (
    <PostDetailBlock>
      <HeaderBlock>
        <TitleBlock>{title}</TitleBlock>
        <DateBlock>{date}</DateBlock>
        {user && <PostActionButtons />}
      </HeaderBlock>
      <Viewer initialValue={content} />
    </PostDetailBlock>
  );
};

export default PostDetail;

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
