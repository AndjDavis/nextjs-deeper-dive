"use client";

import { notFound } from "next/navigation";

// Nest dynamic route - notice productId and reviewId are passed in as params.
export default function Page({
	params,
}: {
	params: { productId: string; reviewId: string };
}) {
	const random = Math.floor(Math.random() * 2);
	if (random === 1) {
		throw new Error("Error Loading Review");
	}
	if (parseInt(params?.reviewId) > 1000) {
		notFound();
	}
	return (
		<div className="flex flex-col gap-2">
			<h2>Review of the Product: {params.productId},</h2>
			<p>Review: {params.reviewId}</p>
			<span>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
				repudiandae quos quaerat eaque iure, nemo molestias odit odio nihil
				numquam maxime neque doloremque sint animi a ullam, voluptatibus
				praesentium quas?
			</span>
		</div>
	);
}
