import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className=" bg-stone-900 text-amber-50 w-full">
      <div className="grid grid-cols-3 px-4 max-w-[1600px] py-3">
        <div className="flex items-center justify-center">
          <img
            src={logo}
            alt="Mondphazen Logo"
            className="h-15 sm:h-20 w-auto"
          />
          <p>Mondphazen</p>
        </div>
        <div className="flex flex-col justify-start items-center">
          <p>Contact us</p>
          <a>Instagram</a>
          <a>Facebook</a>
          <a>Email</a>
          <a>Phone</a>
        </div>
        <div className="flex items-center justify-center py-2.5">
          <Link to="/about">About us</Link>
        </div>
      </div>
      <div className="flex items-center justify-center border-stone-600 border-t border-1">
        &copy; 2025 Mondphazen. All rights reserved.
      </div>
    </footer>
  );
}
