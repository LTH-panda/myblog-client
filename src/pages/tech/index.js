import { PostList } from "components/Post";
import { AboutPageTemplate, Template } from "components/Shared";

export default function TechPage() {
  return (
    <>
      <AboutPageTemplate></AboutPageTemplate>
      <Template>
        <PostList />
      </Template>
    </>
  );
}
