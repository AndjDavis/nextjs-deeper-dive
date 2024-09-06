import ExampleNavLinks from "@/app/(state)/links";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="bg-gray-200">
			<div className="h-screen flex flex-col gap-4 p-5">
				<h2>I am a Layout</h2>
                <ExampleNavLinks isLayout />
				{children}
			</div>
		</main>
	);
}
