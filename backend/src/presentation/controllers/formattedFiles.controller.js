import { getFormattedFiles } from '../../services/getFormattedFiles.service.js'

const formattedFilesController = async (req, res) => {
  try {
    const allowedParams = ['fileName']
    const queryKeys = Object.keys(req.query)
    const unknownParams = queryKeys.filter(key => !allowedParams.includes(key))

    if (unknownParams.length > 0) {
      return res.status(400).json({ errors: [`Unknown query param: ${unknownParams}`] })
    }

    const { fileName } = req.query
    const result = await getFormattedFiles(fileName)

    res.status(200).json({ data: result, errors: [] })
  } catch (err) {
    res.status(500).json({ errors: err.message || 'Server internal error' })
  }
}

export default formattedFilesController
