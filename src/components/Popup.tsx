import React from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(6px);
  z-index: 1;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: relative;
  width: 600px;
  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--plain);
  border: 2px solid var(--plain-shadow);
  box-shadow: 0 0.3rem 0 0 var(--plain-shadow);
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--plain-dark);
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 3rem;
  }

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const Header = styled.h3`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--plain-dark);
`;

const Body = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--plain-dark);
`;

type Props = {
  show: boolean;
  close: () => void;
  header?: string;
  body?: string;
  content?: JSX.Element;
  buttonAction?: () => void;
  buttonText?: string;
};

const Popup: React.FC<Props> = (props) => {
  if (!props.show) return null;

  return (
    <StyledPopup>
      <Background onClick={() => props.close()} />
      <Container>
        {props.header && <Header>{props.header}</Header>}
        {props.body && <Body>{props.body}</Body>}
        {props.content && props.content}
        {props.buttonAction && props.buttonText && (
          <Button
            primary
            onClick={() => {
              if (props.buttonAction) props.buttonAction();
            }}
          >
            {props.buttonText}
          </Button>
        )}
      </Container>
    </StyledPopup>
  );
};

export default Popup;
