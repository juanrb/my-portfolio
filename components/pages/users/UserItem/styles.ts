import tw from "tailwind-styled-components"

const Container = tw.div`
	grid
	grid-cols-4
	p-2
	border-b
	text-sm
`

const NameWrapper = tw.span`

`

const Badge = tw.span`
	p-1
	mr-1
	bg-slate-500
	font-medium
	rounded-full
`

const Name = tw.span`

`

const Email = tw.span`

`

const City = tw.span`
`

const Company = tw.span`
`

const Tw = {Container, Badge, City, Company, Name, NameWrapper, Email}
export default Tw
