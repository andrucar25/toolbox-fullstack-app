import fetch from 'node-fetch'

import { API_KEY, EXTERNAL_BASE_URL, EXTERNAL_ROUTES } from '../constants/api.constants.js'
import { parseCsv } from '../utils/parseCsv.js'

const { files } = EXTERNAL_ROUTES

/**
 * Get formatted files from external API.
 * If fileName exists, then get the files by fileName.
 * @param {string} fileName - The filename to search.
 * @returns {Arrray} Array with the response of formatted files.
 * @throws {Error} Error if something goes wrong.
 */
export const getFormattedFiles = async (fileName) => {
  try {
    if (fileName) {
      const parsedFile = await getParsedFiles(fileName)
      if (parsedFile.length === 0) {
        const error = new Error('File not found')
        error.status = 404
        throw error
      }

      return parsedFile
    }

    const fileNames = await getFiles()
    const allRows = await Promise.all(
      fileNames.files.map(async (filename) => await getParsedFiles(filename))
    )
    const formattedFiles = allRows.flat()

    return formattedFiles
  } catch (error) {
    throw error
  }
}

/**
 * Get all files from external API.
 *  @returns {Arrray} Array with fileNames.
 * @throws {Error} Error if something goes wrong.
 */
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

/**
 * Get all files from a filename in the external API.
 * @param {string} filename - The filename to search.
 * @returns {Promise<string|null>} Text content of the file, or null if not found.
 * @throws {Error} Error if something goes wrong.
 */
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
    return textFile
  } catch (error) {
    console.error(error)
    throw new Error(error.message)
  }
}

/**
 * Get a file by filename from the external API and parses its CSV content.
 *
 * @param {string} filename - Name of the file to fetch and parse.
 * @returns {Promise<Array<Object>>} Parsed rows from the CSV file.
 * Returns an empty array if the file is not found or is empty.
 */
const getParsedFiles = async (filename) => {
  const rawData = await getFile(filename)
  if (!rawData) return []

  return parseCsv(rawData, filename)
}
