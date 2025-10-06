import { notFound } from "next/navigation";

interface Props {
    params: {
        id: string
    }
}

async function UserDetailPage({params}: Props) {
  const id = parseInt((await params).id);
  
  if (id >100)
    notFound();
  
  return (
    <div>
      <h1>User detail  {id}</h1>
    </div>
  );
}

export default UserDetailPage;