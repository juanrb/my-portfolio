import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { BiWorld } from "react-icons/bi"
import { CgRowFirst } from "react-icons/cg"
import { AiFillContainer } from "react-icons/ai"
import { DiCssdeck } from "react-icons/di"
import AdminLayout from "../../components/layout/AdminLayout"
import { Chart } from "../../components/widgets/Chart"
import Card from "../../components/wrappers/Card"

type Props = {}

const Dashboard = (props: Props) => {
	return (
		<AdminLayout>
			<div className='grid gap-y-4'>
				<div className='grid grid-cols-4 gap-x-4'>
					<Card>
						<div className='grid grid-col gap-2'>
							<span className='uppercase text-xs text-gray-600'>AVERAGE SALES</span>
							<span className='font-semibold'>$1,045.45</span>
						</div>
						<div className='bg-red-500 p-1 rounded-md'><BiWorld className=' text-white text-3xl' /></div>
					</Card>
					<Card>
						<div className='grid grid-col gap-2'>
							<span className='uppercase text-xs text-gray-600'>AVERAGE SALES</span>
							<span className='font-semibold'>$1,045.45</span>
						</div>
						<div className='bg-lime-500 p-1 rounded-md'><CgRowFirst className=' text-white text-3xl' /></div>
					</Card>
					<Card>
						<div className='grid grid-col gap-2'>
							<span className='uppercase text-xs text-gray-600'>AVERAGE SALES</span>
							<span className='font-semibold'>$1,045.45</span>
						</div>
						<div className='bg-blue-500 p-1 rounded-md'><AiFillContainer className=' text-white text-3xl' /></div>
					</Card>
					<Card>
						<div className='grid grid-col gap-2'>
							<span className='uppercase text-xs text-gray-600'>AVERAGE SALES</span>
							<span className='font-semibold'>$1,045.45</span>
						</div>
						<div className='bg-orange-500 p-1 rounded-md'><DiCssdeck className=' text-white text-3xl' /></div>
					</Card>
				</div>
				<Card><Chart /></Card>

			</div>

		</AdminLayout>
	)
}

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<unknown>> {
	return {
		props: {}, // will be passed to the page component as props
	}
}
export default Dashboard
