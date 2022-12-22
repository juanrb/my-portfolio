import Tw from "./styles"

type Props = {}

function TopHeader(_props: Props) {
	return (
		<Tw.Container>
			<Tw.ProfileButton>
				<Tw.ProfileIcon />
				<Tw.ProfileName>John doe</Tw.ProfileName>
			</Tw.ProfileButton>
		</Tw.Container>
	)
}

export default TopHeader
