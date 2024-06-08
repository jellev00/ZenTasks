import ProductCard from "@/components/productcard/ProductCard";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>hello world</h1>
      <Link className="btn bg-secondary text-secondary-content" href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
