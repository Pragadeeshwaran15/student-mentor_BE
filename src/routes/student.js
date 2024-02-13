import express from "express"
import studentController from "../controller/student.js"
const router = express.Router()
router.get('/', studentController.getAllStudent)
router.get('/:id', studentController.getStudent)
router.post('/', studentController.addStudent)
router.delete('/:id', studentController.deleteStudent)
router.put('/:id',studentController.editStudent)

export default router