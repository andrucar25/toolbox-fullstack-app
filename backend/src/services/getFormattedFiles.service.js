import fetch from 'node-fetch'

import { API_KEY, EXTERNAL_BASE_URL, EXTERNAL_ROUTES } from '../constants/api.constants.js'
import { parseCsv } from '../utils/parseCsv.js'

const { files } = EXTERNAL_ROUTES

export const getFormattedFiles = async (fileName) => {
  try {

    if (fileName) {
      const parsed = await fetchAndParse(fileName)
      return parsed
    }

    const fileNames = await getFiles()
    const allRows = await Promise.all(
      fileNames.files.map(async (filename) => await fetchAndParse(filename))
    )
    const formattedFiles = allRows.flat()

    return formattedFiles
  } catch (err) {
    throw new Error(err.message)
  }
}

export const getFiles = async () => {
  try {
    const response = await fetch(`${EXTERNAL_BASE_URL}/${files}`, {
      headers: {
        Authorization: API_KEY
      }
    })

    if (!response.ok) {
      throw new Error('Error when getting files')
    }

    const fileNames = await response.json()

    return fileNames || []
  } catch (err) {
    throw new Error(err.message)
  }
}

const getFile = async (filename) => {
  try {
    const response = await fetch(`${EXTERNAL_BASE_URL}/${EXTERNAL_ROUTES.fileName}/${filename}`, {
      headers: {
        Authorization: API_KEY
      }
    })

    if (!response.ok) {
      return null
    }

    const textFile = await response.text()
    console.log("🚀 ~ textFile:", textFile)
    return textFile
  } catch (error) {
    console.error(error)
    throw new Error(error.message)
  }
}

const fetchAndParse = async (filename) => {
  const rawData = await getFile(filename)
  if (!rawData) return []

  return parseCsv(rawData, filename)
}
