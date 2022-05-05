import axios from "axios";
import { AboutTemplate } from "components/Banner";
import { PostList } from "components/Post";
import { Template } from "components/Shared";

export default function LogPage({ posts }) {
  return (
    <>
      <AboutTemplate>Log</AboutTemplate>
      <Template>
        <PostList posts={posts} />
      </Template>
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get("http://localhost:4000/api/log");
  const posts = res.data;

  return {
    props: { posts },
  };
}
