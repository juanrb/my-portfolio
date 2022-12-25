import tw from 'tailwind-styled-components'
import { FaUser } from 'react-icons/fa'

const Container = tw.div`
	flex
	justify-between
	sticky
	top-0
	w-full
	px-2
	font-extralight
	text-xs
	bg-main-dimmed/10
	text-text/80
	backdrop-blur-lg
	shadow-md
	z-10
`
const ProfileButton = tw.div`
	flex
	items-center
	p-2
	rounded-full
	hover:bg-main
	hover:text-text
	cursor-pointer
`
const ProfileIcon = tw(FaUser)`
	rounded-full
	p-1
	text-3xl
	bg-primary/30
	shadow-md
`
const ProfileName = tw.span`
	pl-2
`

const Tw = { Container, ProfileButton, ProfileIcon, ProfileName }
export default Tw
