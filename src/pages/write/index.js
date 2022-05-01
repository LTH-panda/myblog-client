import { Template } from "components/Shared";
import dynamic from "next/dynamic";

const WriteEditor = dynamic(() => import("components/Write/WriteEditor"), {
  ssr: false,
});

export default function WritePage() {
  return (
    <Template>
      <WriteEditor />
    </Template>
  );
}
