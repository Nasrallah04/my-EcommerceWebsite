import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import FormInput from "../form-input/form-input.component";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Signup() {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword({
        email,
        password,
        displayName,
      });
      // console.log(response);
      await createUserDocumentFromAuth(user, { displayName });
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log(err);
      }
    }
  };

  const handelChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <>
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={'full name'}
          type="text"
          onChange={handelChange}
          name="displayName"
          value={displayName}
          required
        />
        <FormInput
          label={'email'}
          type="email"
          onChange={handelChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label={'password'}
          type="password"
          onChange={handelChange}
          name="password"
          value={password}
          required
        />
        <FormInput
          label={'confirm Password'}
          type="password"
          onChange={handelChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default Signup;
