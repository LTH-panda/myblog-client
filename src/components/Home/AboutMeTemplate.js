import useOnlineAdmin from "hooks/useOnlineAdmin";
import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { CareerList } from ".";
import CareerActionButtons from "./CareerActionButtons";

const AboutMeBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const AboutMeTemplate = ({ careers }) => {
  const { user } = useOnlineAdmin();
  return (
    <>
      <style jsx>{`
        .worked {
          width: fit-content;
          padding: 0.3rem;
          padding-left: 1rem;
          padding-right: 1rem;
          background: ${OpenColor.indigo[5]};
          color: #fff;
          border-radius: 0.3rem;
        }
      `}</style>
      <AboutMeBlock>
        <span className="worked">I've worked at</span>
        <CareerList careers={careers} />
        {user && <CareerActionButtons />}
      </AboutMeBlock>
    </>
  );
};

export default AboutMeTemplate;
