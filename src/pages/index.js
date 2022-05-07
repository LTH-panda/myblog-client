import axios from "axios";
import { AboutMeTemplate, HomeTemplate } from "components/Home";
import { Template } from "components/Shared";

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
  const res = await axios.get("http://localhost:4000/api/career");
  const careers = res.data;

  return {
    props: { careers },
  };
}
