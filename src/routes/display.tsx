import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/display")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-2">
      <h1 className="text-4xl text-center pt-24">
        A table will be displayed here
      </h1>
      <button className="flex mx-auto mt-8 bg-neutral-950 text-white px-8 py-2 rounded">
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}
