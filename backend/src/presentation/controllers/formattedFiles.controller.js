import { getFormattedFiles } from '../../services/getFormattedFiles.service.js'

/**
 * Get request for formatted files data.
 * Validates allowed query params and fetches data accordingly.
 *
 * @param req.fileName - Query Param.
 * @returns {Promise<void>} Sends JSON response with data or error.
 */
const formattedFilesController = async (req, res) => {
  try {
    const allowedParams = ['fileName']
    const queryKeys = Object.keys(req.query)
    const notAllowedParams = queryKeys.filter(key => !allowedParams.includes(key))

    if (notAllowedParams.length > 0) {
      return res.status(400).json({ errors: [`Wrong query param: ${notAllowedParams}`] })
    }

    const { fileName } = req.query
    const result = await getFormattedFiles(fileName)

    res.status(200).json({ data: result, errors: [] })
  } catch (err) {
    const statusCode = err.status || 500
    const message = err.message || 'Internal server error'
    res.status(statusCode).json({ errors: [message] })
  }
}

export default formattedFilesController
