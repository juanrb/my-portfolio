import UserItem from "../UserItem"

type Props = {
	data: []
}

const UserList = ({ data }: Props) => {
	return (
		<div>
			{data.map((user: any, i: number) => (
				<UserItem key={i} data={user} />
			))}
		</div>
	)
}

export default UserList
