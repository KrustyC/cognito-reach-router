import React from "react";
import { Redirect } from "@reach/router";
import styled from "styled-components";
import { useUser } from "../../state/UserContext";
import { ResetPasswordForm } from "../../components/auth/ResetPasswordForm";
import { protectedPage } from "../../hoc/protectedPage";

const Wrapper = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//   This route should be private
export const ResetPasswordPage = () => {
  //   const [error, setError] = React.useState(null);
  const { user, completeNewPassword } = useUser();
  const [success, setSuccess] = React.useState(false);

  const onPasswordReset = async ({ password, name }) => {
    try {
      await completeNewPassword(user, password, { name });
      setSuccess(true);
    } catch (err) {
      console.log("Err", err);
      //   setError(err);
    }
  };

  if (success) {
    return <Redirect to="/" noThrow />;
  }

  return (
    <Wrapper>
      Resettati la passsword
      <br />
      <br />
      <ResetPasswordForm onSubmit={onPasswordReset} />
    </Wrapper>
  );
};

export const ResetPassword = protectedPage(ResetPasswordPage);
