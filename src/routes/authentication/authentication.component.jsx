import Signup from '../../components/signup-form/signup-form.component'
import Signin from '../../components/signin-form/signin-form.component'

import './authentication.styles.scss'

function Authentication (){ 
    
        
    return(
        <div className='authentication-container'>
            <Signin/>
            <Signup/>
        </div>
    )   

}


export default Authentication;