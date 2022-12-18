import { useCallback, useState } from 'react'
import { BsArrowLeftShort, BsFillBarChartLineFill, BsSearch } from 'react-icons/bs'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { BiLogOutCircle, BiUserCircle } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { SiPluscodes } from 'react-icons/si'
import { routes } from '../../../config/routes'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {}

const SidebarNav = (props: Props) => {
	const [open, setOpen] = useState(true)
	const router = useRouter()
	const menuItems = [
		{ title: 'Dashboard', icon: <MdOutlineSpaceDashboard className="text-xl" />, url: routes.dashboard },
		{ title: 'Extras', icon: <SiPluscodes className="text-xl" />, url: routes.extras },
		{ title: 'Profile', icon: <BiUserCircle className="text-xl" />, spacing: true, url: routes.profile },
		{ title: 'Settings', icon: <FiSettings className="text-xl" />, url: routes.settings },
		{ title: 'Logout', icon: <BiLogOutCircle className="text-xl" />, hoverClass: true, url: routes.logout, bottom: true },
	]
	const isActive = useCallback((itemUrl: string) => router.pathname.endsWith(itemUrl), [router.pathname])

	return (
		<div className={`bg-slate-400 shadow-lg shadow-slate-500 font-extralight flex flex-col static p-2 pt-7 ${open ? 'w-72' : 'w-14'} relative duration-300 ease-out`}>
			<BsArrowLeftShort onClick={() => setOpen(!open)} className={`text-gray-600 bg-white rounded-full absolute text-2xl -right-3 top-9 cursor-pointer z-10 hover:bg-slate-200 ${!open && 'rotate-180'}`} />

			<div className="flex items-center">
				<span><BsFillBarChartLineFill className="text-gray-600 text-4xl p-2 rounded-md" /></span>
				<h1 className={`text-white duration-300 origin-left flex-nowrap font-semibold ${!open && 'scale-0'}`}>Company</h1>
			</div>

			{/* <div className="flex items-center mt-5 bg-slate-300 rounded p-2 h-10">
				<BsSearch className="text-gray-600 text-lg cursor-pointer" />
				<input type="text" className={`bg-transparent outline-none ml-2 ${!open && 'hidden'}`} placeholder="Search" />
			</div> */}

			{/* FIXME: remove false and undefined classes */}
			<ul className={`duration-300 mt-5 flex flex-col flex-1`}>
				{menuItems.map((item, index) => (
					<li key={index} className={`cursor-pointer rounded hover:bg-slate-500 duration-100 group text-slate-200 hover:text-white ${!!item.spacing && 'mt-5'} ${item.bottom && 'mt-auto'}`}>
						<Link href={item.url} className='p-2 flex items-center'>
							<span className={`${item.hoverClass ? 'group-hover:text-red-500' : 'group-hover:text-cyan-500'} ${isActive(item.url) && 'text-cyan-600'}`}>{item.icon}</span>
							<span className={`pl-2 transition-opacity ${open ? 'opacity-100' : 'opacity-0'} ${isActive(item.url) && 'font-normal'}`}>{item.title}</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default SidebarNav
