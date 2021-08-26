import Image from "next/image";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { selectItems } from "../slices/basketSlice";

const Header = ({ search, setSearch }) => {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="/logo.png"
            width={50}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-blue-400 hover:bg-blue-500 ml-4">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="search"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md dark:bg-white dark:text-black focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={!session ? signIn : signOut} className="link">
            <p>{session ? `Olá, ${session.user.name}` : "Logar-se"}</p>
            <p className="font-extrabold md:text-sm">Conta</p>
          </div>
          <div onClick={() => router.push("/orders")} className="link">
            <p>Meus</p>
            <p className="font-extrabold md:text-sm">Pedidos</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-blue-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Carrinho
            </p>
          </div>
        </div>
      </div>
      <div className="sm:hidden items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="flex items-center h-10 rounded-md flex-grow cursor-pointer bg-blue-400 hover:bg-blue-500">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="search"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
      </div>
    </header>
  );
};

export default Header;
