"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

import { INavLink } from "@/app/_lib/definitions";

const navLinks: INavLink[] = [
	{ name: "Stones", href: "/stones" },
	{ name: "Cloaks", href: "/cloaks" },
	{ name: "Sticks", href: "/sticks" },
];

export default function ExampleNavLinks({ isLayout }: { isLayout: boolean }) {
	const pathname = usePathname();
	const [input, setInput] = useState<string>("");

	return (
		<div className="flex flex-col grow gap-2 space-x-2">
			<div>
				<input
					className="outline rounded"
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</div>
			<div className="flex justify-start gap-3">
				{navLinks.map((link) => {
					const linkText = isLayout ? "Layout Link" : "Template Link";
					return (
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
							<p className="hidden md:block">
								{linkText} - {link.name}
							</p>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
