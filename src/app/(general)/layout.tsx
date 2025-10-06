
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
      <h1>Hello Root and MetaData</h1>
      {children}
    </div>
  );
}