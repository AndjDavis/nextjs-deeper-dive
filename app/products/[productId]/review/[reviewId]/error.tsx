"use client";

export default function ErrorBoundry({ error, reset }: { error: Error, reset: () => void }) {
	return (
		<div>
			<h1>Error in ReviewId</h1>
			{error?.message && <p>{error.message}</p>}
			<button
				className="mt-5 flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
				onClick={reset}
			>
				Try Again
			</button>
		</div>
	);
}
