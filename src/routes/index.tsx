import { createFileRoute, Link } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="p-2 flex justify-center">
      <h1 className="text-xl max-w-[65ch] text-center pt-24">
        <span className="font-bold">VitalDesk</span> is a browser-based digital signage solution that displays
        real-time patient information in hospital waiting areas—improving
        communication, reducing confusion, and enhancing the patient experience.
        🏥📺
      </h1>
    </main>
  );
}
