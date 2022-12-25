import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { useTheme } from 'next-themes'
import AdminLayout from '../../components/layout/AdminLayout'

type Props = {}

const Settings = (_props: Props) => {
  const { theme, setTheme } = useTheme()

  console.log(theme)
  return <AdminLayout>
    <div>Settings</div>
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      switch theme
    </button >
  </AdminLayout >
}

export async function getServerSideProps(
  _context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<unknown>> {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Settings
