import Head from "next/head"
import SidebarNav from "../SidebarNav"
import TopHeader from "../TopHeader"
import Tw from "./styles"

type Props = {
	children: React.ReactNode
	headTitle?: string
}

const AdminLayout = ({ children, headTitle }: Props) => {
	return (
		<>
			<Head><title>{headTitle || 'Dashboard | by juanchila'}</title></Head>
			<Tw.Container>
				<SidebarNav />
				<Tw.ContentWrapper>
					<TopHeader />
					<Tw.Content>{children}</Tw.Content>
				</Tw.ContentWrapper>
			</Tw.Container>
		</>
	)
}

export default AdminLayout
