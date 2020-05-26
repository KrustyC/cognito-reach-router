import React from "react";
import { useUser } from "../../state/UserContext";
import { protectedPage } from "../../hoc/protectedPage";

const TasksPage = () => {
  const { user, logout } = useUser();

  return (
    <div>
      Hello: <b>{user.attributes.name}</b>
      <br />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export const Tasks = protectedPage(TasksPage);
