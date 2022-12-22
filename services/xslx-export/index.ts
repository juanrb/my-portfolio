import Exceljs from 'exceljs'
import { IncomingMessage, ServerResponse } from 'http'
import { prisma } from '../../prisma'

type Options = {}

const XlsxExport = async (
  res: ServerResponse<IncomingMessage>,
  options: Options
) => {
  const artifacts = await prisma.artifacts.findMany()
  const workbook = new Exceljs.Workbook()
  const sheet = workbook.addWorksheet('My Sheet')
  sheet.addRow(artifacts)
  // listArtifacts(artifacts, sheet)

  const fileName = 'test.xlsx'
  res.setHeader(
    'Content-Type',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  )
  res.setHeader('Content-Disposition', 'attachment; filename=' + fileName)
  await workbook.xlsx.write(res)
  return res.end()
}

// function setupWorkbook(workbook: Exceljs.Workbook) {
// 	// TODO: setup workbook and whatever else is needed
// 	return null
// }

// function listArtifacts(artifacts, sheet) {
// 	artifacts.forEach(artifact => {
// 		listArtifact(artifact, sheet)
// 	})
// }

// function listArtifact(artifact, sheet) {
// 	const categories = artifact.getCategories()
// 	listCategory(artifact, category, sheet)
// }

// function listCategory(artifact, category, sheet) {
// 	const parts = artifact.getParts(artifact.id, category.id)
// 	listParts(parts, category.id, sheet)
// }

// function listParts(parts, categoryId, sheet) {
// 	parts.forEach(part => {
// 		listPart(part, categoryId, sheet)
// 	})
// }

// function listPart(part, categoryId, sheet) {
// 	const rows = part.getRows()
// 	sheet.addRows(rows)
// }

export default XlsxExport
