import {  useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase";



import FormInput from "../form-input/form-input.component";
import { SignInContainer, ButtonsContainer } from './signin-form.styles';
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";


const defaultFormField = {
  email: "",
  password: "",
};

function Signin() {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;
  const restFormFields = () => {
    setFormFields(defaultFormField)
  }

  const SignInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword({ email, password });
      restFormFields()
    } catch (error) {
      if (error.code == 'auth/invalid-login-credentials'){
        alert('Wrong credentials')
      }
    }
  };

  const handelChange = (event) => {
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
