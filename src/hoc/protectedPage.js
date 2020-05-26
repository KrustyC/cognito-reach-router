import React from "react";
import { Redirect } from "@reach/router";
import { useUser } from "../state/UserContext";

export const protectedPage = (Component) => (props) => {
  const { user } = useUser();

  if (!user) {
    return <Redirect from="" to="/auth/login" noThrow />;
  }

  return <Component {...props} />;
};
