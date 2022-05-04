import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import { Button } from "components/Shared";
import OpenColor from "open-color";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("./ToastEditor"), {
  ssr: false,
  loading: () => <p>...</p>,
});
import "@toast-ui/editor/dist/toastui-editor.css";
import Category from "./Category";
import useWrite from "hooks/useWrite";

const EditorBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100vw;
`;
const TitleInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-bottom: 3px solid ${OpenColor.indigo[5]};
  font-size: 1.5rem;
`;
const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  gap: 1rem;
`;
const SaveButton = styled(Button)`
  background: ${OpenColor.indigo[5]};
  color: #fff;
`;
const CancelButton = styled(Button)`
  background: ${OpenColor.red[5]};
  color: #fff;
`;

const EditorWithForwarededRef = React.forwardRef((props, ref) => (
  <Editor {...props} forwardedRef={ref} />
));

const WriteEditor = () => {
  const editorRef = useRef(null);
  const {
    title,
    content,
    category,
    handleTitle,
    handleContent,
    handleCategory,
    onSubmit,
  } = useWrite();

  const onChangeEditor = useCallback(() => {
    const content = editorRef.current.getInstance().getMarkdown();
    handleContent({ content });
  });

  return (
    <EditorBlock>
      <TitleInput
        placeholder="제목을 입력하세요"
        value={title}
        onChange={handleTitle}
      />
      <EditorWithForwarededRef
        initialValue={content}
        previewStyle="vertical"
        height="70vh"
        initialEditType="markdown"
        useCommandShortcut={true}
        onChange={onChangeEditor}
        ref={editorRef}
      />
      <ButtonBlock>
        <Category category={category} handleCategory={handleCategory} />
        <CancelButton>취소</CancelButton>
        <SaveButton onClick={onSubmit}>저장</SaveButton>
      </ButtonBlock>
    </EditorBlock>
  );
};

export default WriteEditor;
