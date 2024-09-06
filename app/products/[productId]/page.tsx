import { Metadata } from "next";

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
	return <h2>Details about product - {params.productId}</h2>;
}
