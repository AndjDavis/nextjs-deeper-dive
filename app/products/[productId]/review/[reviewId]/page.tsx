import { notFound } from "next/navigation";

// Nest dynamic route - notice productId and reviewId are passed in as params.
export default function Page({
	params,
}: {
	params: { productId: string; reviewId: string };
}) {
	if (parseInt(params?.reviewId) > 1000) {
		notFound();
	}
	return (
		<h2>
			Review of the product - {params.productId}, review - {params.reviewId}
		</h2>
	);
}
