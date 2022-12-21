import tw from "tailwind-styled-components"
import { FaUser } from "react-icons/fa"

const Container = tw.div`
	flex
	justify-between
	px-2
	font-extralight
	bg-slate-400
`
const ProfileButton = tw.div`
	flex
	items-center
	p-2
	hover:bg-slate-500
	cursor-pointer
`
const ProfileIcon = tw(FaUser)`
	rounded-full
	p-1
	text-3xl
	bg-slate-400
`
const ProfileName = tw.span`
	pl-2
`

const Tw = {Container, ProfileButton, ProfileIcon, ProfileName}
export default Tw
