"use client";

import { Button } from "@/app/_ui/buttons";

export default function ErrorBoundry({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<div className="flex flex-col gap-5">
			<h1>Error in ReviewId</h1>
			{error?.message && <p>{error.message}</p>}
			<Button onClick={reset}>Try Again</Button>
		</div>
	);
}
