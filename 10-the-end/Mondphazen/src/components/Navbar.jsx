import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="py-2.5 bg-stone-900 text-amber-50 fixed top-0 w-full z-40 border-b border-white/20 backdrop-blur-md">
      <div className="flex items-center justify-around px-4 max-w-[1600px] mx-auto">
        <div>
          <Link to="/">
            <span className="p-1.5 hover:text-stone-200">Mondphazen</span>
          </Link>
        </div>

        <div>
          <ul className="flex space-x-4">
            <Link to="/" className="hover:text-stone-200">
              Home
            </Link>
            <Link to="store" className="hover:text-stone-200">
              Store
            </Link>
            <Link to="cart" className="hover:text-stone-200">
              Cart
            </Link>
            <Link to="about" className="hover:text-stone-200">
              About
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
