import { getFiles } from '../../services/getFormattedFiles.service.js'

const filesListController = async (req, res) => {
  try {
    const result = await getFiles()
    res.status(200).json({ data: result, errors: [] })
  } catch (err) {
    res.status(500).json({ errors: err.message || 'Server internal error' })
  }
}

export default filesListController
