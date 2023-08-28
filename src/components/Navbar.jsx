"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = ({ home, product, person, logout }) => {
  const router = useRouter();
  const logOut = () => {
    return router.push("/login");
  };
  return (
    <nav className="bg-primary z-10 text-second p-3 rounded-t-2xl fixed bottom-0 left-0 right-0">
      <ul className="flex items-center justify-around">
        <li>
          <Link
            className={`p-4 rounded-lg block ${home && "bg-second/5"}`}
            href="/"
          >
            <Image width={25} src="/home.svg" alt="home-icon" />
          </Link>
        </li>
        <li>
          <Link
            className={`p-4 rounded-lg block ${product && "bg-second/5"}`}
            href="/product"
          >
            <Image width={28} src="/product.svg" alt="product-icon" />
          </Link>
        </li>
        <li>
          <Link
            className={`p-4 rounded-lg block ${person && "bg-second/5"}`}
            href="/account"
          >
            <Image width={28} src="/person.svg" alt="person-icon" />
          </Link>
        </li>
        <li>
          <button
            onClick={logOut}
            className={`p-4 rounded-lg block ${logout && "bg-second/5"}`}
          >
            <Image width={28} src="/logout.svg" alt="logout-icon" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
