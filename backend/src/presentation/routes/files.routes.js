import filesListController from '../controllers/filesList.controller.js'
import formattedFilesController from '../controllers/formattedFiles.controller.js'

const registerFileRoutes = (router) => {
  router.get('/data', formattedFilesController)
  router.get('/list', filesListController)
}

export default registerFileRoutes
