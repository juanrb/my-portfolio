import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import AdminLayout from "../../components/layout/AdminLayout"

type Props = {}

const Profile = (props: Props) => {
	return (
		<AdminLayout>Profile</AdminLayout>
	)
}

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<unknown>> {
	return {
		props: {}, // will be passed to the page component as props
	}
}

export default Profile