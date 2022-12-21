type Props = {
	data: any
}

const UserItem = ({ data }: Props) => {
	return (
		<div className="grid grid-cols-4 p-2 border-b text-sm">
			<span><span className="bg-slate-500 rounded-full p-1 font-medium mr-1">JD</span>{data.name}</span>
			<span>{data.email}</span>
			<span>{data.address.city}</span>
			<span>{data.company.name}</span>
		</div>
	)
}

export default UserItem
