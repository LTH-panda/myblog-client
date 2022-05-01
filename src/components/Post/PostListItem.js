import Image from "next/image";
import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import media from "styles/styles-utils";
import Tags from "./Tags";

const PostListItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  ${media.tablet} {
    width: calc(100% / 2 - 2%);
  }

  ${media.desktop} {
    width: 20rem;
    height: 20rem;
    padding-top: 0;
  }
`;
const ImageBlock = styled.div`
  width: 100%;
`;

const TextBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;
const Title = styled.h3`
  font-size: 1.3rem;
`;
const Body = styled.p`
  flex: 1;
`;
const Date = styled.div`
  color: ${OpenColor.gray[5]};
`;

const PostListItem = () => {
  return (
    <PostListItemBlock>
      <ImageBlock>
        <Image
          src="/cube.jpeg"
          width={16}
          height={9}
          layout="responsive"
          objectFit="cover"
        />
      </ImageBlock>
      <TextBlock>
        <Tags />
        <Title>제목</Title>
        <Body>내용</Body>
        <Date>Date</Date>
      </TextBlock>
    </PostListItemBlock>
  );
};

export default PostListItem;
