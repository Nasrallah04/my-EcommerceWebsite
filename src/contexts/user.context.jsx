import { createContext, useReducer, useEffect } from "react";
import {
  onAuthStateChangedListner,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

export const INITIAL_STATE = {
    currentUser: null,
    };

const userReducer = (state, action) => {
  console.log("Dispatched")
  console.log(action)
  const {type, payload} = action;
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
        return { 
            ...state,
             currentUser: payload };
        default: 
        throw new Error(`Unhandled type: ${type}`);
    }
    };


// Start working with Reducers
export const UserProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const value = { currentUser, setCurrentUser };
const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
const {currentUser} = state;
console.log(currentUser)
const setCurrentUser = (user) => {
    dispatch({ type: 'SET_CURRENT_USER', payload: user });
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
       createUserDocumentFromAuth(user);

      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={{...state,setCurrentUser}}>{children}</UserContext.Provider>;
};
