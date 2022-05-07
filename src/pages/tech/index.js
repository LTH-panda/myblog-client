import { PostEmpty, PostList } from "components/Post";
import { Template } from "components/Shared";
import server from "lib/api/server";

export default function TechPage({ posts }) {
  return (
    <>
      <Template>
        {posts.length !== 0 ? <PostList posts={posts} /> : <PostEmpty />}
      </Template>
    </>
  );
}

export async function getStaticProps() {
  const res = await server.get("/tech");
  const posts = res.data;
  return {
    props: { posts },
  };
}
