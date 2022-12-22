import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

import AdminLayout from '../../components/layout/AdminLayout'
import { Chart } from '../../components/widgets/Chart'
import Card from '../../components/wrappers/Card'
import Tw from './styles'
import Summary from '../../components/pages/dashboard/Summary'

type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

type Props = {
  comments: Comment[]
}

const Dashboard = (_props: Props) => {
  return (
    <AdminLayout>
      <Tw.Container>
        <Summary />
        <Card>
          <Chart />
        </Card>
        <Card>
          <Chart />
        </Card>
      </Tw.Container>
    </AdminLayout>
  )
}

export async function getServerSideProps(
  _context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<unknown>> {
  const comments = await (
    await fetch('https://jsonplaceholder.typicode.com/comments')
  ).json()

  // await XlsxExport(context.res, {})

  return {
    props: {
      comments,
    },
  }
}
export default Dashboard
