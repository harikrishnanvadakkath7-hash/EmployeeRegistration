const like = require('../models/like')

let likedpersondata = async (req, res) =>
{
    try{
        const  likedpersondata =  like({
          likegot : req.body.likegot ,
          likegiven :req.body.likegiven
        })
        const likes = await likedpersondata.save()
        res.status(200).json({status: 200, likes, message: "Data inserted successfully"})
    }
    catch (err) {
    console.log(err);
  }
}

let viewlikedperson = (req, res) => {
   like.find().populate("likegot likegiven").then((result) => {
     res.status(200).json(result)
  })
    .catch((req,res) => {
      console.log(err)
    })
}

let deletelikeddata = async(req, res) => {
  await like.findByIdAndDelete({ _id: req.params.id }).then((result) => {
    res.status(200).json({ result, message: "Deleted successfully !!" })
  })
    .catch((error) => {
      console.log(error);
    })
}

module.exports = {likedpersondata,viewlikedperson,deletelikeddata}