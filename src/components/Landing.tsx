import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import Header from "./Header";
import landing from "../assets/landing.png";
import Confetti from "./Confetti";
import Card from "./Card";

const StyledLanding = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubHeader = styled.div`
  font-size: 1.7rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 3rem;
`;

const Image = styled.img`
  width: 50vw;

  @media (max-width: 768px) {
    width: 85vw;
  }
`;

const CardContainer = styled.div`
  width: 60vw;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const Landing: React.FC = () => {
  const [t] = useTranslation();
  const history = useHistory();

  return (
    <StyledLanding>
      <Content>
        <Header text={t("name")} />
        <SubHeader>{t("tagline")}</SubHeader>
        <Image src={landing} />
        <Confetti />
        <CardContainer>
          <Card
            text={t("description")}
            buttonAction={() => history.push("/dungeon")}
            buttonText={t("buttons.getWaifus")}
          />
        </CardContainer>
      </Content>
    </StyledLanding>
  );
};

export default Landing;
