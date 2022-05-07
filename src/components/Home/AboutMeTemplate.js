import { ShadowContainer } from "components/Shared";
import useOnlineAdmin from "hooks/useOnlineAdmin";
import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import css from "styled-jsx/css";
import { CareerList } from ".";
import CareerActionButtons from "./CareerActionButtons";

const AboutMeTemplate = ({ careers }) => {
  const { user } = useOnlineAdmin();
  return (
    <>
      <style jsx>{style}</style>
      <AboutMeBlock>
        <span className="worked">I've worked at</span>
        <CareerList careers={careers} />
        {user && <CareerActionButtons />}
      </AboutMeBlock>
    </>
  );
};

export default AboutMeTemplate;

const style = css`
  .worked {
    width: fit-content;
    padding: 0.3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background: ${OpenColor.indigo[5]};
    color: #fff;
    border-radius: 0.3rem;
  }
`;

const AboutMeBlock = styled(ShadowContainer)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;
