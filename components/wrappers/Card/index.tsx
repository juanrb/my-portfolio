type Props = {
	children: React.ReactNode
}

const Card = ({ children }: Props) => {
	return (
		<div className="p-4 bg-slate-200 shadow-lg flex w-full rounded-xl items-center justify-between">{children}</div>
	)
}

export default Card
