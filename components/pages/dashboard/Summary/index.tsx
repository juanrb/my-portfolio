import { BiWorld } from "react-icons/bi"
import { CgRowFirst } from "react-icons/cg"
import { AiFillContainer } from "react-icons/ai"
import { DiCssdeck } from "react-icons/di"
import Tw from "./styles"
import SummaryCard from "../../../widgets/SummaryCard"

type Props = {}

const Summary = (_props: Props) => {
	return (
		<Tw.Container>
			<SummaryCard title="average sales" icon={<BiWorld />} value='$1,045.45' />
			<SummaryCard title="total sales" icon={<CgRowFirst />} value='$15,045.45' />
			<SummaryCard title="average users" icon={<AiFillContainer />} value='3,845' />
			<SummaryCard title="new users" icon={<DiCssdeck />} value='+1,023' />
		</Tw.Container>
	)
}

export default Summary
