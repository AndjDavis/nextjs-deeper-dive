// http://localhost:3000/products/200
// params passes '200' into params
// named afterr the dynamic route folder name
export default function Page({ params }: { params: { maxid: string } }) {
	return <h2>Details about a product - {params.maxid}</h2>;
}
