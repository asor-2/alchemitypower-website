import React from "react";
import styled from "styled-components";
import alchemityLogo from "./images/alchemity_logo_w_text.png";

const WarningContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 2rem;
  text-align: center;
  box-sizing: border-box;
`;

const Logo = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 250px;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 200px;
    margin-bottom: 1rem;
  }
`;

const Message = styled.p`
  color: #25abe0;
  font-size: 1.5rem;
  max-width: 600px;
  line-height: 1.6;
  font-weight: 700;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    max-width: 500px;
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    max-width: 400px;
    padding: 0 1rem;
  }
`;

const ScreenSizeWarning = () => {
  return (
    <WarningContainer>
      <Logo src={alchemityLogo} alt="Alchemity Logo" />
      <Message>
        This website does not support viewing for smaller screens at this time.
        Please view the website on a larger device.
      </Message>
    </WarningContainer>
  );
};

export default ScreenSizeWarning;
