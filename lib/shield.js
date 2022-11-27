import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const privateRoutes = ["/dashboard"];
const privateRedirect = "/auth/login";

const authRoutes = ["/auth/login","auth/register"];
const authRedirect = "/dashboard";

export default function Shield({ children }) {
  const { pathname, push } = useRouter();
  const { state, loading } = useContext(AuthContext);

  if (loading) {
    return <p> ...</p>;
  } else if (state.user != null && authRoutes.includes(pathname)) {
    push(authRedirect);
  } else if (state.user === null && privateRoutes.includes(pathname)) {
    push(privateRedirect);
  } else {
    return <>{children}</>;
  }
}
