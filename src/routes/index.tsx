import { createFileRoute, Link } from "@tanstack/react-router";
import { authClient } from "~/utils/auth-client";
export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { data: session } = authClient.useSession();

  return (
    <main className="p-2 flex justify-center">
      <div className="text-xl max-w-[65ch] text-center pt-24">
        {!session ? (
          <p>
            <span className="font-bold">VitalDesk</span> is a browser-based
            digital signage solution that displays real-time patient information
            in hospital waiting areas—improving communication, reducing
            confusion, and enhancing the patient experience. 🏥📺
          </p>
        ) : (
          <p className="text-3xl">
            Welcome back, <span className="font-bold">{session.user.name}</span>
            !
          </p>
        )}
      </div>
    </main>
  );
}
