import ExampleNavLinks from "@/app/(state)/links";

export default function StateTemplate({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="bg-green-300">
			<h4>I am a template</h4>
			<ExampleNavLinks isLayout={false} />
			<div className="h-screen flex flex-col gap-4 p-5">{children}</div>
		</div>
	);
}


