import tw from 'tailwind-styled-components'

const Container = tw.div`
	flex
	bg-main-dimmed
	dark:bg-main-dimmed
	text-text
	dark:text-text
	h-screen
`

const Content = tw.div`
	p-8
	overflow-scroll
`

const ContentWrapper = tw.div`
	w-full
	overflow-scroll
`

const Tw = { Container, Content, ContentWrapper }
export default Tw
