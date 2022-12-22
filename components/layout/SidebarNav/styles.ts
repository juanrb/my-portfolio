import tw from 'tailwind-styled-components'
import { BsArrowLeftShort, BsFillBarChartLineFill } from 'react-icons/bs'

interface SidebarProps {
  $open: boolean
}

const Container = tw.div<SidebarProps>`
	flex
	flex-col
	relative
	${(p) => (p.$open ? 'w-72' : 'w-14')}
	p-2
	pt-7
	font-extralight
	bg-slate-400
	shadow-lg
	shadow-slate-500
	duration-300
	ease-out
`

const Arrow = tw(BsArrowLeftShort)<SidebarProps>`
	absolute
	z-10
	top-9
	-right-3
	text-2xl
	text-gray-600
	bg-white
	rounded-full
	hover:bg-slate-200
	cursor-pointer
	${(p) => !p.$open && 'rotate-180'}
`

const LogoContainer = tw.div`
	flex
	items-center
`

const Logo = tw(BsFillBarChartLineFill)`
	p-2
	text-gray-600
	text-4xl
	rounded-md
`

const LogoTitle = tw.h1<SidebarProps>`
	flex-nowrap
	text-white
	font-semibold
	${(p) => !p.$open && 'scale-0'}
	duration-300
	origin-left
`

const MenuItems = tw.ul`
	flex
	flex-col
	flex-1
	mt-5
	duration-300
`

interface MenuItemProps {
  $bottom?: boolean
  $hoverClass?: boolean
  $active?: boolean
  $open?: boolean
  $spacing?: boolean
}

const MenuItem = tw.li<MenuItemProps>`
	group
	${(p) => !!p.$spacing && 'mt-5'}
	${(p) => p.$bottom && 'mt-auto'}
	text-slate-200
	hover:text-white
	hover:bg-slate-500
	rounded
	duration-100
	cursor-pointer
`

const MenuItemIcon = tw.span<MenuItemProps>`
	${(p) =>
    p.$hoverClass ? 'group-hover:text-red-500' : 'group-hover:text-cyan-500'}
	${(p) => p.$active && 'text-cyan-600'}
`

const MenuItemTitle = tw.span<MenuItemProps>`
	pl-2
	${(p) => p.$active && 'font-normal'}
	transition-opacity
	${(p) => (p.$open ? 'opacity-100' : 'opacity-0')}
`

const Tw = {
  Container,
  Arrow,
  LogoContainer,
  Logo,
  LogoTitle,
  MenuItems,
  MenuItem,
  MenuItemIcon,
  MenuItemTitle,
}
export default Tw
