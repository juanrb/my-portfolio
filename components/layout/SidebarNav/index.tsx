import { useState } from 'react'
import { BsArrowLeftShort, BsFillBarChartLineFill, BsSearch } from 'react-icons/bs'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { BiLogOutCircle, BiUserCircle } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { SiPluscodes } from 'react-icons/si'
import { routes } from '../../../config/routes'

type Props = {}

const SidebarNav = (props: Props) => {
	const [open, setOpen] = useState(true)
	const menuItems = [
		{ title: 'Dashboard', icon: <MdOutlineSpaceDashboard className="text-xl" />, url: routes.dashboard },
		{ title: 'Extras', icon: <SiPluscodes className="text-xl" />, url: routes.extras },
		{ title: 'Profile', icon: <BiUserCircle className="text-xl" />, spacing: true, url: routes.profile },
		{ title: 'Settings', icon: <FiSettings className="text-xl" />, url: routes.settings },
		{ title: 'Logout', icon: <BiLogOutCircle className="text-xl" />, hoverClass: true, url: routes.logout },
	]

	return (
		<div className={`bg-slate-400 font-extralight h-screen p-2 pt-7 ${open ? 'w-72' : 'w-14'} relative duration-300`}>
			<BsArrowLeftShort onClick={() => setOpen(!open)} className={`text-gray-600 bg-white rounded-full absolute text-2xl -right-3 top-9 cursor-pointer hover:bg-slate-200 ${!open && 'rotate-180'}`} />

			<div className="inline-flex items-center">
				<BsFillBarChartLineFill className="text-gray-600 text-4xl p-2 rounded-md" />
				<h1 className={`text-white duration-300 origin-left flex-nowrap font-semibold ${!open && 'scale-0'}`}>Company</h1>
			</div>

			<div className="flex items-center mt-5 bg-slate-300 rounded p-2 h-10">
				<BsSearch className="text-gray-600 text-lg cursor-pointer" />
				<input type="text" className={`bg-transparent outline-none ml-2 ${!open && 'hidden'}`} placeholder="Search" />
			</div>

			<ul className={`duration-300 pt-5 h-5/6`}>
				{menuItems.map((item, index) => (
					<li key={index} className={`text-gray-200 flex items-center cursor-pointer rounded p-2 hover:bg-slate-500 duration-100 group hover:text-white ${!!item.spacing && 'mt-5'}`}>
						<span className={`${item.hoverClass ? 'group-hover:text-red-500' : 'group-hover:text-cyan-500'}`}>{item.icon}</span>
						<span className={`pl-2 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}>{item.title}</span>
					</li>
				))}
			</ul>
		</div>
	)
}

export default SidebarNav
