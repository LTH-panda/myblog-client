import axios from "axios";
import { PostList } from "components/Post";
import { AboutPageTemplate, Template } from "components/Shared";

export default function TechPage({ posts }) {
  return (
    <>
      <AboutPageTemplate></AboutPageTemplate>
      <Template>
        <PostList posts={posts} />
      </Template>
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get("http://localhost:4000/api/tech");
  const posts = res.data;
  return {
    props: { posts },
  };
}
