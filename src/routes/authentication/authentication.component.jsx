import Signup from '../../components/signup-form/signup-form.component'
import Signin from '../../components/signin-form/signin-form.component'
import { createUserDocumentFromAuth,  signInWithGooglePopup} from '../../utils/firebase/firebase'



function Authentication (){ 
    
        
    return(
        <div>
            <h1>Sign in page</h1>
            <Signin/>
            <Signup/>
        </div>
    )   

}


export default Authentication;