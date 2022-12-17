import Head from "next/head"
import SidebarNav from "../SidebarNav"
import TopHeader from "../TopHeader"

type Props = {
	children: React.ReactNode
	headTitle?: string
}

const AdminLayout = ({ children, headTitle }: Props) => {
	return (
		<>
			<Head><title>{headTitle || 'Dashboard | by juanchila'}</title></Head>
			<main className="flex h-screen">
				<SidebarNav />
				<div className='flex flex-col w-full'>
					<TopHeader />
					<div className='p-8'>{children}</div>
				</div>
			</main>
		</>
	)
}

export default AdminLayout
