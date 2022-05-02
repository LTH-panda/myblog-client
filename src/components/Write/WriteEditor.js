import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Button } from "components/Shared";
import OpenColor from "open-color";

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

const WriteEditor = () => {
  const editorRef = useRef(null);

  const onSubmit = useCallback(() => {
    const content = editorRef.current.getInstance().getMarkdown();
    console.log(content);
  });

  return (
    <EditorBlock>
      <TitleInput placeholder="제목을 입력하세요" />
      <Editor
        initialValue=" "
        previewStyle="vertical"
        height="70vh"
        initialEditType="markdown"
        useCommandShortcut={true}
        ref={editorRef}
      />
      <ButtonBlock>
        <CancelButton>취소</CancelButton>
        <SaveButton onClick={onSubmit}>저장</SaveButton>
      </ButtonBlock>
    </EditorBlock>
  );
};

export default WriteEditor;
