export default function BorderContainer({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex flex-col gap-8 rounded-lg border-2 p-8">
			{children}
		</div>
	)
}
