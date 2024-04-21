export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
  };
  
  export const INITIAL_STATE = {
      currentUser: null,
      };
  
  export const userReducer = (state = INITIAL_STATE, action) => {
    console.log("Dispatched")
    console.log(action)
    const {type, payload} = action;
      switch (type) {
          case USER_ACTION_TYPES.SET_CURRENT_USER:
          return { 
              ...state,
               currentUser: payload };
          default: 
          return state;
          // everysingle action needs to return a state if it does not match the type
      }
      };