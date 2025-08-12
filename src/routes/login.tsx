import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="grid place-items-center h-screen">
      <section className="w-max h-[32rem]">
        <p className="font-bold text-center text-3xl mt-8">
          Welcome to VitalDesk
        </p>
        <button
          onClick={() => {}}
          className="relative min-h-6 w-full py-3 mt-8 flex items-center justify-center border border-neutral-300 rounded-3xl hover:bg-sky-100 transition-colors duration-500 select-none"
        >
          <img
            src="/google.png"
            alt="Google Icon"
            className="absolute left-4 max-w-6"
          />
          <span className="font-semibold">Continue with Google</span>
        </button>
      </section>
    </main>
  );
}
