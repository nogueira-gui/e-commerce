import Image from "next/image";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";


const RegisterHeader = ({ search, setSearch }) => {
  const [session] = useSession();
  const router = useRouter();

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

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={!session ? signIn : signOut} className="link">
            <p>{session ? `Olá, ${session.user.name}` : "Logar-se"}</p>
            <p className="font-extrabold md:text-sm">Conta</p>
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

export default RegisterHeader;
