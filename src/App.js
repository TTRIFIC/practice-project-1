import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  /* By passing a function to setUsersList, we are taking the previous version
     of the users array (prevUsersList) and creating a new array.
     To create a new array, you have the first element being the previous version of
     the array, with the spread operator, and then the second element has the new
     JSX props passed through. 
  */
  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
