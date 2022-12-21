import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { useQuery } from "react-query"
import AdminLayout from "../../components/layout/AdminLayout"
import UserList from "../../components/pages/users/UserList"
import users from "../../services"

type Props = {}

const Users = (props: Props) => {
	const { isLoading, isError, data } = useQuery(users().queryKey, users().queryFn)

	isLoading && <div>Loading...</div>
	isError && <div>Error</div>
	console.log(isLoading, isError, data)

	return (
		<AdminLayout>
			{data && <UserList data={data} />}
		</AdminLayout>
	)
}

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<unknown>> {

	return {
		props: {}, // will be passed to the page component as props
	}
}

export default Users
