import {  useState } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { FormEvent, ChangeEvent } from "react";
import { useDispatch } from 'react-redux';
import {emailSignInStart, googleSignInStart} from '../../store/user/user.action';

import FormInput from "../form-input/form-input.component";
import { SignInContainer, ButtonsContainer } from './signin-form.styles';
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";


const defaultFormField = {
  email: "",
  password: "",
};

function Signin() {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;
  const restFormFields = () => {
    setFormFields(defaultFormField)
  }

  const SignInWithGoogle = async () => {
    dispatch(googleSignInStart())
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      restFormFields()
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        alert('Wrong credentials')
      }
    }
  };

  const handelChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"email"}
          type="email"
          onChange={handelChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label={"password"}
          type="password"
          onChange={handelChange}
          name="password"
          value={password}
          required
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={BUTTON_TYPES_CLASSES.google} onClick={SignInWithGoogle}>
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  ); 
}

export default Signin;
