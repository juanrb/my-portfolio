import tw from 'tailwind-styled-components'

const Container = tw.div`
	flex
	items-center
	justify-between
	w-full
	p-4
	backdrop-blur-xl
	bg-main/30
	dark:bg-main/30
	rounded-2xl
	shadow-2xl
`

const Tw = { Container }
export default Tw
