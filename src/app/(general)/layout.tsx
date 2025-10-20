import { NavBar } from "@/components/nav-bar/NavBar";
import { CounterStoreProvider } from "../providers/counter-store-provider";

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
    <CounterStoreProvider>
      <NavBar></NavBar>
      <h1>Hello Root and MetaData</h1>
      {children}
    </CounterStoreProvider>
  );
}