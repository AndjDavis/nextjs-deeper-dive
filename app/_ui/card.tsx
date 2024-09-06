const Card = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col gap-3 bg-gray-50 justify-center items-center p-28 m-2.5 shadow-lg border-1 border-stone-800">
			{children}
		</div>
	);
};

export default Card;
