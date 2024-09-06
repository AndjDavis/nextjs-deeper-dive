import NavLinks from "@/app/_ui/nav-links";
import { INavLink } from "@/app/_lib/definitions";

const navLinks: INavLink[] = [
	{ name: "Register", href: "/register" },
	{ name: "Login", href: "/login" },
	{ name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<NavLinks navLinks={navLinks} />
			<div className="h-screen flex flex-col gap-4 p-5">{children}</div>
		</div>
	);
}
