const employee = require('../models/employee')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).single("regimage");


let employeedata = async (req, res) => {
  try {
    const employeedata = employee({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      regusername: req.body.regusername,
      regpassword: req.body.regpassword,
      email: req.body.email,
      contact: req.body.contact,
      image: req.file,
      designation: req.body.designation
    })
    const user = await employeedata.save()
    res.status(200).json({ status: 200, user, message: "Data inserted successfully" })
  }
  catch (err) {
    console.log(err);
  }

}

let findemployee = (req, res) => {
   employee.find().then((result) => {
     res.status(200).json(result)
  })
    .catch((req,res) => {
      console.log(err)
    })
}

let findEmpById = async(req,res)=>
{
  employee.findById({_id:req.params.id}).then((result)=>
  {
    res.status(200).json(result)
  })
  .catch((error)=>
  {
    console.log(error);
  })
}

let longin = async (req, res) => {
  const employeeloginusername = req.body.empusername
  const employeeloginpassword = req.body.emppassword
  const findemp = await employee.findOne({ regusername: employeeloginusername })
  // console.log(findemp.firstname)
  if (findemp) {
    if (findemp.regpassword == employeeloginpassword) {
      res.status(200).json ({message:"Login successful",status:200,data:findemp})
    }
    else {
      res.json({message:"Incorrect password !",status:400})
    }
  }
  else {
    res.json({message:"User not found !",status:404})
  }

}

let deletedata = (req , res)=>
{
  employee.findByIdAndDelete({_id:req.params.id}).then((result)=>
  {
   res.status(200).json({result , message:"Deleted Successfully !"})
  })
  .catch((error)=>
    {
    console.log(error);
  })
}

let modify = async(req , res)=>
{
  const {firstname , lastname , email , contact , image , designation , regusername , regpassword} = req.body
  await employee.findByIdAndUpdate({_id:req.params.id} , {firstname ,lastname , email , contact , image , designation , regusername , regpassword} , {new:true} ).then((result)=>
  {
    res.status(200).json({result , message :"Updated !"})
  })
  .catch((error)=>
  {
   console.log(error);
  })
}


module.exports = { employeedata, findemployee, longin , findEmpById , upload , deletedata , modify}