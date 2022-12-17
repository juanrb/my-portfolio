import Head from "next/head"
import SidebarNav from "../SidebarNav"
import TopHeader from "../TopHeader"

type Props = {
	children: React.ReactNode
	headTitle?: string
}

const PageCanvas = ({ children, headTitle }: Props) => {
	return (
		<>
			<Head><title>{headTitle || 'Dashboard | by juanchila'}</title></Head>
			<main className="p-8 flex h-screen">
				<SidebarNav />
				<div className='flex flex-col w-full'>
					<TopHeader />
					{children}
				</div>
			</main>
		</>
	)
}

export default PageCanvas
