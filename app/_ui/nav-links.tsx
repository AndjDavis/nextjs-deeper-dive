"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
	{ name: "Register", href: "/register" },
	{ name: "Login", href: "/login" },
	{ name: "Forgot Password", href: "/forgot-password" },
];

export default function NavLinks () {
	const pathname = usePathname();
	return (
		<div className="flex grow space-x-2">
			<div className="flex justify-between gap-3">
				{navLinks.map((link) => (
					<Link
						href={link.href}
						key={link.name}
						className={clsx(
							"flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
							{
								"bg-sky-100 text-blue-600 text-base": pathname === link.href,
							}
						)}
					>
						<p className="hidden md:block">{link.name}</p>
					</Link>
				))}
			</div>
		</div>
	);
}
