import Exceljs from "exceljs"
import { IncomingMessage, ServerResponse } from "http"
import { prisma } from "../../prisma"

type Options = {}


const XlsxExport = async (res:ServerResponse<IncomingMessage>, options: Options) => {
	const artifacts = await prisma.artifacts.findMany()
	const workbook = new Exceljs.Workbook()
	const sheet = workbook.addWorksheet('My Sheet')
	artifacts.forEach(artifact => {
		sheet.addRow([3, 'Sam', new Date()])
		console.log(artifact, 'artifact')
	})

	const fileName = 'test.xlsx'
	res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
	res.setHeader("Content-Disposition", "attachment; filename=" + fileName)

 	await workbook.xlsx.write(res)
 	return res.end()
}

export default XlsxExport
