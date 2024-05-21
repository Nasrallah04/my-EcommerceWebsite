import {  useState } from "react";
import { FormEvent, ChangeEvent } from "react";
import { Auth, AuthError, AuthErrorCodes } from "firebase/auth";

import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";

import FormInput from "../form-input/form-input.component";
import {SignUpContainer} from './signup-form.styles.jsx'
import Button from '../button/button.component'

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Signup() {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  // console.log(formFields);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Cannot create user, email already in use");
      } else {
        console.log(error);
      }
    }
  };

  const handelChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignUpContainer>
    <h2>Don&apos;t have an account?</h2>
      <span>Sign Up with your email and password</span>
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
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
}

export default Signup;
