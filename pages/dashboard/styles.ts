import tw from 'tailwind-styled-components'

const Container = tw.div`
	grid
	gap-y-4
`
const TotalSales = tw.div`
	grid
	grid-cols-2
	gap-x-4
`

const Efficiency = tw.div`
	grid
	grid-cols-3
	gap-x-4
`

const Tw = { Container, Efficiency, TotalSales }
export default Tw
