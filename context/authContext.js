import { useReducer, useEffect, createContext, useState } from "react";
import { auth } from "../lib/firebase";

const firebaseReducer = (state, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, user: action.payload };
    case "LOGGED_OUT_USER":
      return initialState;
    default:
      return state;
  }
};

const initialState = {
  user: null,
};

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(firebaseReducer, initialState);
  const [loading, setLoading] = useState(true);

  async function triggerStatusUser() {
    await auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            photoURL: user.photoURL,
            displayName: user.displayName,
          },
        });
        setLoading(false);
      } else {
        dispatch({
          type: "LOGGED_OUT_USER",
          payload: initialState,
        });
        setLoading(false);
      }
    });
  }

useEffect(() => {
 console.log({loading,state})

}, [state,loading])


  useEffect(() => {
    triggerStatusUser();
  }, []);

  const value = { state, dispatch, loading };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
