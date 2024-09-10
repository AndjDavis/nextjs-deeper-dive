import "@/app/complex-dashboard/styles.css";

export default function DashboardLayout({
	children,
	login,
	notifications,
	revenue,
	users,
}: {
	children: React.ReactNode;
	login: React.ReactNode;
	notifications: React.ReactNode;
	revenue: React.ReactNode;
	users: React.ReactNode;
}) {
	const isLoggedIn = false;
	return (
		<div className="min-h-screen p-2">
			<div className="my-5 p-2">{children}</div>
			{isLoggedIn ? (
				<div className="flex">
					<div className="flex flex-col">
						<div>{users}</div>
						<div>{revenue}</div>
					</div>
					<div className="flex grow">{notifications}</div>
				</div>
			) : (
				<div className="flex flex-col flex-grow">{login}</div>
			)}
		</div>
	);
}

// Traditional method of combining components into a single page
// export function DashboardLayout({ children }: { children: React.ReactNode }) {
// 	return (
// 		<>
// 			<div className="h-screen">{children}</div>
// 			<UserAnalytics />
// 			<RevenueMetrics />
// 			<Notifications />
// 		</>
// 	);
// }
