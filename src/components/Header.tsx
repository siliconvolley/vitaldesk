import LoginButton from "./LoginButton";

export default function Header() {
  return (
    <header className="min-h-24 border-b-2 flex justify-between items-center px-12">
      <p className="text-xl font-bold flex gap-2 items-center">
        VitalDesk
      </p>
      <LoginButton />
    </header>
  )
}
