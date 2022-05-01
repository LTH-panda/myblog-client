import { Template } from "components/Shared";
import dynamic from "next/dynamic";
const PostDetail = dynamic(() => import("components/Post/PostDetail"), {
  ssr: false,
});

export default function TechDetailPage() {
  return (
    <Template>
      <PostDetail />
    </Template>
  );
}
