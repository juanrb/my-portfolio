import { useCallback, useState } from 'react'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { BiLogOutCircle, BiUserCircle } from 'react-icons/bi'
import { FiSettings, FiUsers } from 'react-icons/fi'
import { SiPluscodes } from 'react-icons/si'
import { routes } from '../../../config/routes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Tw from './styles'

type Props = {}

const SidebarNav = (_props: Props) => {
  const [open, setOpen] = useState(true)
  const router = useRouter()
  const menuItems = [
    {
      title: 'Dashboard',
      icon: <MdOutlineSpaceDashboard className="text-xl" />,
      url: routes.dashboard,
    },
    {
      title: 'Extras',
      icon: <SiPluscodes className="text-xl" />,
      url: routes.extras,
    },
    {
      title: 'Users',
      icon: <FiUsers className="text-xl" />,
      spacing: true,
      url: routes.users,
    },
    {
      title: 'Profile',
      icon: <BiUserCircle className="text-xl" />,
      url: routes.profile,
    },
    {
      title: 'Settings',
      icon: <FiSettings className="text-xl" />,
      url: routes.settings,
    },
    {
      title: 'Logout',
      icon: <BiLogOutCircle className="text-xl" />,
      hoverClass: true,
      url: routes.logout,
      bottom: true,
    },
  ]
  const isActive = useCallback(
    (itemUrl: string) => router.pathname.endsWith(itemUrl),
    [router.pathname]
  )

  return (
    <Tw.Container $open={open}>
      <Tw.Arrow $open={open} onClick={() => setOpen(!open)} />

      <Tw.LogoContainer>
        <span>
          <Tw.Logo />
        </span>
        <Tw.LogoTitle $open={open}>Company</Tw.LogoTitle>
      </Tw.LogoContainer>

      {/* <div className="flex items-center mt-5 bg-slate-300 rounded p-2 h-10">
        <BsSearch className="text-gray-600 text-lg cursor-pointer" />
        <input type="text" className={`bg-transparent outline-none ml-2 ${!open && 'hidden'}`} placeholder="Search" />
      </div> */}

      <Tw.MenuItems>
        {menuItems.map((item, index) => (
          <Tw.MenuItem
            key={index}
            $spacing={item.spacing}
            $bottom={item.bottom}
          >
            <Link href={item.url} className="p-2 flex items-center">
              <Tw.MenuItemIcon $active={isActive(item.url)}>
                {item.icon}
              </Tw.MenuItemIcon>
              <Tw.MenuItemTitle $active={isActive(item.url)} $open={open}>
                {item.title}
              </Tw.MenuItemTitle>
            </Link>
          </Tw.MenuItem>
        ))}
      </Tw.MenuItems>
    </Tw.Container>
  )
}

export default SidebarNav
