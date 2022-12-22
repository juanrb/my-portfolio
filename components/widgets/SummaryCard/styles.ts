import tw from 'tailwind-styled-components'

const Container = tw.div`
`

const DataWrapper = tw.div`
	grid
	grid-col
	gap-2
`

const DataTitle = tw.span`
	uppercase
	text-xs
	text-gray-600
`

const DataValue = tw.span`
	font-semibold
`

const IconWrapper = tw.div`
	p-1
	text-3xl
	text-white
	bg-red-500
	rounded-md
`

const Tw = { Container, DataWrapper, IconWrapper, DataTitle, DataValue }
export default Tw
