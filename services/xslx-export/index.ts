import { prisma } from "../../prisma"

type Options = {}


const XlsxExport = async (options: Options) => {
	const artifacts = await prisma.artifacts.findMany()
	return artifacts
}

export default XlsxExport
