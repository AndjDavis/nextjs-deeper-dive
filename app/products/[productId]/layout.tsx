import { LinkButton } from "@/app/_ui/buttons";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-screen flex flex-col gap-4 p-5">
			<h2 className="font-bold text-lg">Product Features</h2>
			{children}
			<div className="w-40 mt-5">
				<LinkButton href="/products">Back to Products</LinkButton>
			</div>
		</div>
	);
};
