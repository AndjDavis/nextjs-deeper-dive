import { LinkButton } from "@/app/_lib/buttons";

export default function Home() {
	return (
		<main className="min-h-screen gap-5 flex flex-col justify-start">
			<h1>Welcome Home</h1>
			<div className="w-52">
				<LinkButton href="/blog">Blog</LinkButton>
				<LinkButton href="/products">Products</LinkButton>
			</div>
		</main>
	);
}
