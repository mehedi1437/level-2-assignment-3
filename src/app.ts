import express, { Application, Request, Response,  } from 'express'
import cors from 'cors'
import router from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorHandeler'
import notFound from './app/middlewares/notFound'
const app :Application = express()

// parsher
app.use(express.json())
app.use(cors())

app.use('/api/', router)

 app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})
app.use(globalErrorHandler);

//Not Found
app.use(notFound);
export default app

