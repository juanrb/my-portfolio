import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import AdminLayout from '../../components/layout/AdminLayout'

type Props = {}

const Extras = (_props: Props) => {
  return <AdminLayout>Extras</AdminLayout>
}

export async function getServerSideProps(
  _context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<unknown>> {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Extras
