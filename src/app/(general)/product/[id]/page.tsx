import { notFound } from "next/navigation";

interface Props {
    params: {
        id: string
    }
}

async function ProductDetailPage({params}: Props) {
  const id = parseInt((await params).id);
  
  if (id >100)
    notFound();
  
  return (
    <div>
      <h1>Product detail  {id}</h1>
    </div>
  );
}

export default ProductDetailPage;