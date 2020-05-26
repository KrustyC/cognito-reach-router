import React from "react";
import { Auth } from "aws-amplify";
import config from "../config";
import { PageLoader } from "../components/PageLoader";

console.log("config", config);

const UserContext = React.createContext(null);

export const UserProvider = (props) => {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    Auth.configure(config.awsAmplify.Auth);

    async function fetchUser() {
      try {
        const cognitoUser = await Auth.currentAuthenticatedUser();
        setUser(cognitoUser);
      } catch (e) {
        console.log(e);
        setUser(null);
      }

      setIsLoading(false);
    }

    fetchUser();
  }, []);

  const login = async (email, password) => {
    try {
      const cognitoUser = await Auth.signIn(email, password);
      setUser(cognitoUser);
    } catch (err) {
      if (err.code === "UserNotFoundException") {
        err.message = "Invalid username or password";
      }
      // ... (other checks)

      throw err;
    }
  };

  const completeNewPassword = async (user, newPassword, requiredAttributes) => {
    try {
      await Auth.completeNewPassword(user, newPassword, requiredAttributes);
    } catch (err) {
      err.message = "Invalid Request";
      throw err;
    }
  };

  const logout = async () => {
    try {
      await Auth.signOut();
      setUser(null);
    } catch (e) {
      console.log("Error signing out", e);
    }
  };

  // Make sure to not force a re-render on the components that are reading these values,
  const values = React.useMemo(
    () => ({ user, login, logout, completeNewPassword }),
    [user]
  );

  return (
    <UserContext.Provider value={values}>
      {isLoading ? <PageLoader /> : props.children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = React.useContext(UserContext);

  if (context === undefined) {
    throw new Error("`useUser` must be within a `UserProvider`");
  }

  return context;
};
