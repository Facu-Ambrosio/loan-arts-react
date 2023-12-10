import { EnterCartButton } from "./buttons/EnterCartButton";
import { Logo } from "./Logo";

export function Navbar() {

  return (
    <nav className="bg-gray-200 p-4 flex items-center justify-between">
      <Logo/>
      <EnterCartButton />
    </nav>
  );
}
