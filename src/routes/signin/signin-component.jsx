import Signup from '../../components/signup-form/signup-form.component'
import { createUserDocumentFromAuth,  signInWithGooglePopup} from '../../utils/firebase/firebase'

function Signin (){ 
    
        const logGoogleUser = async () => {
            const {user} = await signInWithGooglePopup()
            const userDocRef = await createUserDocumentFromAuth(user)
        }
    return(
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>
                Log in with Google
            </button>
            <Signup/>
        </div>
    )   

}


export default Signin;