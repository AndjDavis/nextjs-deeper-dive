export default function DashboardLayout({
	children,
	users,
	revenue,
	notifications,
}: {
	children: React.ReactNode;
	users: React.ReactNode;
	revenue: React.ReactNode;
	notifications: React.ReactNode;
}) {
	return (
		<div className="h-screen">
			<div>{children}</div>
            <div className="flex">
                <div className="flex flex-col">
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div className="flex grow">
                    {notifications}
                </div>
            </div>
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
