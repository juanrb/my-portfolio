type Props = {
	children: React.ReactNode
}

const Canvas = ({ children }: Props) => {
	return (
		<div className="p-8 font-light">{children}</div>
	)
}

export default Canvas
