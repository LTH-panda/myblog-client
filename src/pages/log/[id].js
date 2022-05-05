import axios from "axios";
import { PostDetail } from "components/Post";
import { Template } from "components/Shared";

export default function LogDetailPage({ post }) {
  return (
    <Template>
      <PostDetail title={post.title} content={post.content} date={post.date} />
    </Template>
  );
}

export async function getStaticPaths() {
  const res = await axios.get("http://localhost:4000/api/log");
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
  const res = await axios.get(`http://localhost:4000/api/log/${params.id}`);
  const post = res.data;

  return {
    props: { post },
  };
}
