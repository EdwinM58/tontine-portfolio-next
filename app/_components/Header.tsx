import Link from "next/link";
import { client } from "../../utils/client";

const Header = async () => {
  const name = await getData();

  return (
    <div className="px-4 h-14 flex bg-[#E7E7E7] items-center justify-between">
      <Link href={"/"} className="font-bold sm:text-2xl">
        {name}
      </Link>

      <NavBar />
    </div>
  );
};

const NavBar = () => {
  return (
    <nav>
      <ul className="flex justify-end gap-x-8">
        <Link href={"/myprojects"}>My Projects</Link>
        <Link href={"/mystore"}>My Store</Link>
      </ul>
    </nav>
  );
};

const getData = async () => {
  const header = await client.fetch<Header[]>(`*[_type == "header"]`);
  const name = header[0].name;

  return name;
};

export default Header;
