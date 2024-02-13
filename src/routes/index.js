import express from 'express'
import indexController from '../controller/index.js'
import userRoutes from './mentor.js'
import studentRoutes from './student.js'
import assignRoutes from './assign.js'

const router = express.Router()

//this is for home page router
router.get('/',indexController.homePage)

//Other page router
router.use('/mentors', userRoutes)

//students routes
router.use('/student', studentRoutes)

// assignment routes
router.use('/assign', assignRoutes)


export default router