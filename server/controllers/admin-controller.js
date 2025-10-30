const User = require('../models/user_models')

 const Contact = require ('../models/contact-model');
// const { TypedEventEmitter } = require('mongodb');



//  to  get all users 
const getAllUsers =  async (req, res)=>{
  try{
 const users = await User.find({},{password:0});

 if (!users || users.length === 0){
  res.status(404).json({message : "no users found"})

 }
return res.status(200).json(users)
 }

   catch(error){
    next(error)
  //  } get aal poined summary 

   }
  };



  //  user delete logiscs

  const DeleteUserById = async  (req, res)=>{
    try {
       const id = req.params.id;
       await  User.deleteOne({_id:id});
        return res.status(200).json({message:"user deleted successfully"});
      
    } catch (error) {
      next(error)
    }

  }



  //  admin panel get all  data of  Single user users


 const getUserById = async(req, res)=>{
  try{
    const id  = req.params.id;
  const data =  await User.findOne({_id:id},{password:0});

   return res.status(200).json(data);
    }
   
      catch(error){
       next(error);
 
   
      }
 }



  //  to update data of the Users


  const updateUserById =  async (req, res)=>{
     try{
        const id = req.params.id;
         const  updateUserData  = req.body;
          const updateUser = await User.updateOne({_id:id},{$set:updateUserData});
           return res.status(200).json(updateUser);

     }
      catch(error){
        next(error)

      }
  }


  //  get all contact Logics 

 const getAllContacts =  async( req, res)=>{

 try{
 const contacts = await  Contact.find();

  if (!contacts || contacts.length === 0){
    res.status(404).json({message : "no contacts found"})
  }
  return res.status(200).json(contacts);
 }
  catch(error){
next(error)
    
  }

 }



 
  module.exports = {getAllUsers, getAllContacts, DeleteUserById,getUserById,updateUserById}