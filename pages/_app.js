import { AuthProvider } from "../context/authContext";
import Shield from "../lib/shield";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Shield>
        <Component {...pageProps} />
      </Shield>
    </AuthProvider>
  );
}

export default MyApp;
