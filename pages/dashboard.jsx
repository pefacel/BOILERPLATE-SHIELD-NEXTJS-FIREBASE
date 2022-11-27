import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function Dashboard() {
  return (
    <div>
      <button
        className="bg-indigo-200 border p-12 hover:bg-indigo-400 "
        onClick={() => signOut(auth)}
      >
        LOG OUT
      </button>
    </div>
  );
}
