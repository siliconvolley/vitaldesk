import { authClient } from "~/utils/auth-client";
import LoginButton from "./LoginButton";

export default function Header() {
  const { data: session } = authClient.useSession();

  return (
    <header className="min-h-24 border-b-2 flex justify-between items-center px-12">
      <p className="text-xl font-bold flex gap-2 items-center">VitalDesk</p>
      {!session ? (
        <LoginButton />
      ) : (
        <button
          onClick={() => authClient.signOut()}
          className="px-12 py-4 bg-primary text-white text-xl text-center font-bold rounded-md select-none"
        >
          Log Out
        </button>
      )}
    </header>
  );
}
