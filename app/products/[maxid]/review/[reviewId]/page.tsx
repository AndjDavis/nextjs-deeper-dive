import { notFound } from "next/navigation";

// Nest dynamic route - notice maxid and reviewId are passed in as params.
export default function Page({
	params,
}: {
	params: { maxid: string; reviewId: string };
}) {
	if (parseInt(params?.reviewId) > 1000) {
		notFound();
	}
	return (
		<h2>
			Review of the product - {params.maxid}, review - {params.reviewId}
		</h2>
	);
}
