import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

import AdminLayout from '../../components/layout/AdminLayout'
import { BarChart } from '../../components/widgets/BarChart'
import { BubbleChart } from '../../components/widgets/BubbleChart'
import Card from '../../components/wrappers/Card'
import Tw from './styles'
import Summary from '../../components/pages/dashboard/Summary'
import { RadarChart } from '../../components/widgets/RadarChart'
import { AreaChart } from '../../components/widgets/AreaChart'
import { PieChart } from '../../components/widgets/PieChart'

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
        <Tw.Efficiency>
          <Card>
            <RadarChart />
          </Card>
          <Card>
            <AreaChart />
          </Card>
          <Card>
            <PieChart />
          </Card>
        </Tw.Efficiency>
        <Tw.TotalSales>
          <Card>
            <BarChart />
          </Card>
          <Card>
            <BubbleChart />
          </Card>
        </Tw.TotalSales>
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
