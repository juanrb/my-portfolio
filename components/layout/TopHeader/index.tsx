import { FaUser } from 'react-icons/fa'
import Tw from "./styles"

type Props = {}

function TopHeader({ }: Props) {
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
