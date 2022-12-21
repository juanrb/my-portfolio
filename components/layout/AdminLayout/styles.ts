import tw from "tailwind-styled-components"

const Container = tw.div`
	flex
	h-screen
`

const Content = tw.div`
	p-8
	overflow-scroll
`

const ContentWrapper = tw.div`
	flex
	flex-col
	w-full
`

const Tw = { Container, Content, ContentWrapper }
export default Tw
