import { CareerList } from "components/Home";
import { Template } from "components/Shared";
import { WriteCareer } from "components/Write";

export default function WriteCareerPage() {
  return (
    <Template>
      <WriteCareer />
      <CareerList />
    </Template>
  );
}
