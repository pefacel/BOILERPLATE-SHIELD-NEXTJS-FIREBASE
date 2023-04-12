import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function Dashboard() {
  async function getToken() {
    const user = await auth.currentUser;
    console.log(user);
    const token = await user.getIdToken(/* forceRefresh */ true);
    console.log(token);

  }

  return (
    <>
      <div>
        <button
          className="bg-indigo-200 border p-12 hover:bg-indigo-400 "
          onClick={() => signOut(auth)}
        >
          LOG OUT
        </button>
      </div>

      <div>
        <button
          className="bg-indigo-200 border p-12 hover:bg-indigo-400 "
          onClick={() => getToken()}
        >
          Token
        </button>
      </div>
    </>
  );
}
