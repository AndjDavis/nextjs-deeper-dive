import Link from "next/link";
import Card from "@/app/_ui/card";

export default function Page() {
	return (
		<Card>
			<h1>Notifications Slot</h1>
			<Link href="/complex-dashboard/archived">Archived</Link>
		</Card>
	);
}
