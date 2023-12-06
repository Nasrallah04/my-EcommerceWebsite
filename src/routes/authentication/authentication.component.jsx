import Signup from '../../components/signup-form/signup-form.component'
import Signin from '../../components/signin-form/signin-form.component'

import { AuthenticationContainer } from './authentication.styles';

function Authentication (){ 
    
        
    return(
        <AuthenticationContainer>
            <Signin/>
            <Signup/>
        </AuthenticationContainer>
    )   

}


export default Authentication;