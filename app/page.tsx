import { LinkButton } from "@/app/_lib/buttons";

export default function Home() {
	return (
		<main className="min-h-screen gap-5 flex flex-col justify-start p-5">
			<h1>Welcome Home</h1>
			<div className="flex flex-col justify-start w-40">
				<LinkButton href="/login">Log In</LinkButton>
				<LinkButton href="/blog">Blog</LinkButton>
				<LinkButton href="/products">Products</LinkButton>
			</div>
		</main>
	);
}
