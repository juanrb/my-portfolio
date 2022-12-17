import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import AdminLayout from "../../components/layout/AdminLayout"

type Props = {}

const Settings = (props: Props) => {
	return (
		<AdminLayout>Settings</AdminLayout>
	)
}

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<unknown>> {
	return {
		props: {}, // will be passed to the page component as props
	}
}

export default Settings