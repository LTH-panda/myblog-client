import { PostDetail } from "components/Post";
import { Template } from "components/Shared";
import server from "lib/api/server";

export default function StartUpDetailPage({ post }) {
  return (
    <Template>
      <PostDetail title={post.title} content={post.content} date={post.date} />
    </Template>
  );
}

export async function getStaticPaths() {
  const res = await server.get("/start-up");
  const posts = res.data;
  const paths = posts.map((post) => ({
    params: { id: post._id },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const res = await server.get(`start-up/${params.id}`);
  const post = res.data;

  return {
    props: {
      post,
    },
  };
}
