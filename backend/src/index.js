import app from './presentation/app.js'
import { PORT } from './constants/api.constants.js'

app.listen(PORT, () => {
  console.log(`Listening server on http://localhost:${PORT}`)
})
