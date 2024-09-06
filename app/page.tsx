import { LinkButton } from "@/app/_lib/buttons";

export default function Home() {
	return (
		<main className="min-h-screen gap-5 flex flex-col justify-start">
			<h1>Welcome Home</h1>
			<LinkButton href="/blog">Blog</LinkButton>
		</main>
	);
}
