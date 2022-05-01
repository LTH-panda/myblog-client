import React, { useRef } from "react";
import styled from "styled-components";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Button } from "components/Shared";
import OpenColor from "open-color";

const EditorBlock = styled.div`
  width: 100vw;
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

  return (
    <EditorBlock>
      <Editor
        initialValue=" "
        previewStyle="vertical"
        height="80vh"
        initialEditType="markdown"
        useCommandShortcut={true}
        ref={editorRef}
      />
      <ButtonBlock>
        <CancelButton>취소</CancelButton>
        <SaveButton>저장</SaveButton>
      </ButtonBlock>
    </EditorBlock>
  );
};

export default WriteEditor;
