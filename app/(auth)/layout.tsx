import NavLinks from "@/app/_ui/nav-links";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<NavLinks />
			<div className="h-screen flex flex-col gap-4 p-5">{children}</div>
		</div>
	);
}
