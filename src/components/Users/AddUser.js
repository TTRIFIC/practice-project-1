import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // Storing error as state value
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    // Preventing page refresh / fetching new HTML data
    event.preventDefault();

    // Getting current value from input from the Name and Age refs.
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    // Input validation. + in front of enteredAge forces string to number conversion
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter an age greater than or equal to 1.",
      });
      return;
    }

    // Runs the addUserHandler function found in the App.js file, passing in the
    // inputs from the user
    props.onAddUser(enteredName, enteredUserAge);

    // Manually setting the values of the HTML DOM to reset the user input.
    // RARELY DO THIS. Normally let React handle everything
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // Tracking if the error modal should be displayed
  const errorHandler = () => {
    setError(null);
  };

  // Value props required for being able to reset input fields.
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
