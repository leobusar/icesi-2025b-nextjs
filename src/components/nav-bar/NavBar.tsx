import Link from "next/link";
import ActiveLink from "../active-link/ActiveLink";

const  navItems =  [
    {name: "About", path: "/about"},
    {name: "Profile", path: "/profile"},
    {name: "User", path: "/user"},
]

export function NavBar() {
  return (
    <nav className="flex bg-blue-500 bg-opacity-80 p-2 m-2 rounded">
        <Link href="/" className="p-2 m-2 text-white">Home</Link>
        {
            navItems.map(item => (
                <ActiveLink {...item} key={item.path} />
            ))
        }
        
    </nav>
  );
}