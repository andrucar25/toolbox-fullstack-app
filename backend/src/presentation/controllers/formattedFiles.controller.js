import { getFormattedFiles } from '../../services/getFormattedFiles.service.js'

const formattedFilesController = async (req, res) => {
  try {
    const { fileName } = req.query
    const result = await getFormattedFiles(fileName)
    
    res.status(200).json({data: result, errors: []})
  } catch (err) {
    res.status(500).json({ errors: err.message || 'Server internal error' })
  }
}

export default formattedFilesController
