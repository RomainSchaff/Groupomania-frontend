import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import styled from "styled-components";

const CustomLogButton = styled.button`
  font-weight: bold;
  font-size: 16px;
  padding: 15px;
  margin: 15px;
  color: white;
  background-color: gray;
  border-radius: 10px;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 5px 5px 10px black;
  }
  &.active-btn {
    background-color: indianRed;
    box-shadow: 5px 5px 10px black;
  }
`;

const FormContainer = styled.div`
  width: 500px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

function Log({ signIn, signUp }) {
  const [signInModal, setSignInModal] = useState(signIn);
  const [signUpModal, setSignUpModal] = useState(signUp);

  const handleModals = (e) => {
    if (e.target.id === "signUp") {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (e.target.id === "signIn") {
      setSignInModal(true);
      setSignUpModal(false);
    }
  };

  return (
    <FormContainer>
      <ul>
        <CustomLogButton
          onClick={handleModals}
          id="signUp"
          className={signUpModal ? "active-btn" : null}
        >
          S'inscrire
        </CustomLogButton>
        <CustomLogButton
          onClick={handleModals}
          id="signIn"
          className={signInModal ? "active-btn" : null}
        >
          Se connecter
        </CustomLogButton>
      </ul>
      {signInModal && <SignIn />}
      {signUpModal && <SignUp />}
    </FormContainer>
  );
}

export default Log;
