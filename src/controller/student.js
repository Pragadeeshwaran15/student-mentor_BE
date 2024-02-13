import StudentModel from '../modules/student.js'
import dotenv from 'dotenv'
dotenv.config()

const getAllStudent = async (req, res) => {
  try {
    const student = await StudentModel.find()
      res.status(200).send({
      message: "Students Data Fetched Successfully",
      student
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};
const getStudent = async (req, res) => {
   try {
     const student = await StudentModel.findOne({_id: req.params.id})
       if(student){
        const student = await StudentModel.findOne({_id: req.params.id})
         res.status(200).send({
           message: "Fetched Successfully",
           student
         });
       }else{
         res.status(400).send({
           message: "Invalid Student Id"
         });
       }
   } catch (error) {
     res.status(500).send({
       message: "Internal Server Error",
     });
   }
};
//Add a new student
const addStudent = async (req, res) => {
  try {
    const student = await StudentModel.findOne({email: req.body.email})

    if(!student){
      let newstudent = await StudentModel.create(req.body)
      res.status(200).send({
        message: "student Added Successfully",
      });
    }else{
      res.status(400).send({
        message:`student with '${req.body.email}' already exists`
      })
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error : error.message
    });
  }
};
//Delete a student
const deleteStudent = async (req, res) => {
  try {
    const student = await StudentModel.findById({_id: req.params.id})
      if(student){
        await StudentModel.deleteOne({_id: req.params.id})
        res.status(200).send({
          message: "student Deleted Successfully"
        });
      }else{
        res.status(400).send({
          message: "Invalid student Id"
        });
      }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
}

const editStudent = async (req, res)=>{
  try {
    let student=await StudentModel.findById({_id:req.params.id})
    if(student){
    student.name=req.body.name
    student.email=req.body.email
    student.mentor=req.body.mentor
    student.batch=req.body.batch
    
    await student.save()
        res.status(200).send({
            message:"data edited successfully",
            
        })
    }else{
        res.status(400).send({
            message:"Invalid student id"
        })
    }
   
    
} catch (error) {
    res.status(500).send({
        message:"Internal server Error",
        error:error.message
    })
}
}

export default { getAllStudent, getStudent, addStudent, deleteStudent,editStudent};