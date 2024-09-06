import Link from "next/link";
import Card from "@/app/_ui/card";

export default function Page() {
	return (
		<Card>
			<h1 className="font-bold text-xl">Archived Notifications Slot</h1>
			<Link href="/complex-dashboard">Default Notifications</Link>
		</Card>
	);
}
