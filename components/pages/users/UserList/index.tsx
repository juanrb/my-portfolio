import UserItem from "../UserItem"
import Tw from "./styles"

type Props = {
	data: []
}

const UserList = ({ data }: Props) => {
	return (
		<Tw.Container>
			{data.map((user: any, i: number) => (
				<UserItem key={i} data={user} />
			))}
		</Tw.Container>
	)
}

export default UserList
