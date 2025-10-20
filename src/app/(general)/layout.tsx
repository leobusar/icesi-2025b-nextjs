import { NavBar } from "@/components/nav-bar/NavBar";

export const metadata = {
 title: 'General',
 description: 'Paginas con autenticación',
};
export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar></NavBar>
      <h1>Hello Root and MetaData</h1>
      {children}
    </div>
  );
}