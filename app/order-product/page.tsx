"use client";

import { useRouter } from "next/navigation";

export default function Page() {
	const router = useRouter();
	const handleButton = () => {
		console.log("Order Placed Successfully");
		router.push("/");
	};
	return (
		<div className="flex flex-col gap-4 p-5">
			<h1 className="font-bold text-xl">Product Orders</h1>
			<div>
				<button
					className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
					onClick={handleButton}
				>
					Place Order
				</button>
			</div>
		</div>
	);
}
