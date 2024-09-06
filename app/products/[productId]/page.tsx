import { Metadata } from "next";
import { LinkButton } from "@/app/_ui/buttons";

type Props = {
	params: {
		productId: string;
	};
};

export const generateMetadata = ({ params }: Props): Metadata => {
	return {
		title: `Product ${params.productId}`,
	};
};

// http://localhost:3000/products/200
// params passes '200' into params
// named after the dynamic route folder name [productId]
export default function Page({ params }: Props) {
	return (
		<div className="flex flex-col gap-3">
			<h2 className="font-bold text-lg">Details about Product {params.productId}</h2>
			<div>
				<LinkButton href={`/products/${params.productId}/review/1`}>
					See Reviews
				</LinkButton>
			</div>
		</div>
	);
}
