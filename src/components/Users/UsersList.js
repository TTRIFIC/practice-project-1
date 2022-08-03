import React from "react";
import Card from "../UI/Card";

import classes from "./UsersList.module.css";

/* .map function will map an array of data to JSX elements. In this example
   I am taking a users array and creating an individual list element for each
   user. */
const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li id={user.id}>
            {user.name} ({user.age}years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
