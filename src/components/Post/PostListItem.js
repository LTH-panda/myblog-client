import { ShadowContainer } from "components/Shared";
import Image from "next/image";
import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import media from "styles/styles-utils";
import Tags from "./Tags";

const PostListItem = ({ image, title, date, content }) => {
  return (
    <PostListItemBlock hover>
      <ImageBlock>
        <Image
          src="/cube.jpeg"
          width={21}
          height={9}
          layout="responsive"
          objectFit="cover"
        />
      </ImageBlock>
      <TextBlock>
        {/* <Tags /> */}
        <Title>{title}</Title>
        <Body>{content}</Body>
        <Date>{date}</Date>
      </TextBlock>
    </PostListItemBlock>
  );
};

export default PostListItem;

const PostListItemBlock = styled(ShadowContainer)`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ImageBlock = styled.div``;

const TextBlock = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  word-break: break-all;
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
