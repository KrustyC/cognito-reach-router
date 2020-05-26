import React, { useEffect } from "react";
import { Redirect } from "@reach/router";
import styled from "styled-components";
import { useUser } from "../../state/UserContext";
import { LoginForm } from "../../components/auth/LoginForm";

const Wrapper = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const useRedirect = (user) => {
  const [redirectPath, setRedirectPath] = React.useState(null);

  useEffect(() => {
    if (user) {
      if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
        setRedirectPath("/auth/reset-password");
      }

      setRedirectPath("/");
    }
  }, [user]);

  return redirectPath;
};

export const Login = () => {
  const [error, setError] = React.useState(null);
  const { user, login } = useUser();
  const redirectPath = useRedirect(user);

  const onLogin = async ({ email, password }) => {
    try {
      await login(email, password);
    } catch (err) {
      console.log("err", err);
      // setError(err);
    }
  };

  if (redirectPath) {
    return <Redirect to={redirectPath} noThrow />;
  }

  return (
    <Wrapper>
      Hey, log in to make amazing things!
      <br />
      <br />
      <LoginForm onSubmit={onLogin} />
      {error && <h1>{error}</h1>}
    </Wrapper>
  );
};
