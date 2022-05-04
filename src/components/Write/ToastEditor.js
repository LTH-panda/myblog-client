import React from "react";
import { Editor } from "@toast-ui/react-editor";

const ToastEditor = (props) => {
  return <Editor {...props} ref={props.forwardedRef} />;
};

export default ToastEditor;
