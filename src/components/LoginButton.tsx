import { Link } from "@tanstack/react-router";

export default function LoginButton() {
  return (
    <Link
      to="/login"
      onClick={() => {}}
      className="px-12 py-4 bg-[--clr-primary] text-white text-xl text-center font-bold rounded-md select-none"
    >
      Log In
    </Link>
  );
}
