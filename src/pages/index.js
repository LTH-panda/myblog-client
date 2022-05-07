import { AboutMeTemplate } from "components/Home";
import { Template } from "components/Shared";
import server from "lib/api/server";

export default function Home({ careers }) {
  return (
    <>
      <Template>
        <AboutMeTemplate careers={careers} />
      </Template>
    </>
  );
}

export async function getStaticProps() {
  const res = await server.get("/career");
  const careers = res.data;

  return {
    props: { careers },
  };
}
