import Tw from "./styles"

type Props = {
	children: React.ReactNode
}

const Card = ({ children }: Props) => {
	return (
		<Tw.Container>{children}</Tw.Container>
	)
}

export default Card
