import { FaUser } from 'react-icons/fa'

type Props = {}

function TopHeader({ }: Props) {
	return (
		<div className="bg-slate-600 px-2 backdrop-filter backdrop-blur-sm bg-opacity-10 font-extralight flex justify-end">
			<div className='flex items-center hover:bg-slate-500 p-2 cursor-pointer'>
				<FaUser className='rounded-full bg-slate-400 text-3xl p-1' />
				<span className='pl-2'>John doe</span>
			</div>
		</div>
	)
}

export default TopHeader
