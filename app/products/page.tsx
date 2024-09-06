import Link from "next/link";
import { LinkButton } from "@/app/_ui/buttons";

export default function Page() {
	const exampleProductId = 200;
	return (
		<div className="flex flex-col gap-4 p-5">
			<h1 className="font-bold">My Products</h1>
			<h3>
				<Link href="/products/1">Product 1</Link>
			</h3>
			<h3>
				<Link href="/products/2">Product 2</Link>
			</h3>
			<h3>
				<Link href="/products/3" replace>Product 3</Link>
			</h3>
			<h3>
				<Link href={`/products/${exampleProductId}`}>Product {exampleProductId}</Link>
			</h3>
			<div className="w-32 mt-5">
				<LinkButton>
					Home
				</LinkButton>
			</div>
		</div>
	);
}
