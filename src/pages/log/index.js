import axios from "axios";
import { PostEmpty, PostList } from "components/Post";
import { Template } from "components/Shared";

export default function LogPage({ posts }) {
  return (
    <>
      <Template>
        {posts.length !== 0 ? <PostList posts={posts} /> : <PostEmpty />}
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
