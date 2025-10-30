
 const  User =  require ('../models/user_models')
 const bcrypt = require('bcryptjs')

//  home logic 
const home =  async (req, res)=>{

   try{
    res.status(200)
    .send("welcome guys in the era of mern stack")
   }

    catch(err){
    console.log(err);

    }
 }

//   REgister logic 

const register = async (req , res)=>{
   try{
      //  console.log(req.body);
        const { username, email, phone, password } =  req.body;
     

   const userExist = await  User.findOne({email});
   
   if(userExist){
       return res.status(400).json({ msg: 'email already exists '});
   }

   //  hash the password 

   //  const saltRound  = 10;
   //  const hash_password  = await bcrypt.hash(password, saltRound);
    
  const userCreated  = await User.create({username, email,phone, password});


   res.status(201).json({msg :userCreated, token: await userCreated.generateToken(), userId: userCreated._id.toString()
});
   }
    catch (err){
 res.status(400).json('internal server error')
    }
}


//  user Login Logic 


 const login =  async(req, res)=>{

    try{
      const {email, password} =  req.body;
      const userExist = await User.findOne({email});
      if(!userExist){
          return res.status(400).json({msg: "Invalid Credentials"})
      }

//  const user = await bcrypt.compare(password, userExist.password)
         
 const user  = await userExist.comparePassword(password);
 if(user){
   res.status(200).json({msg :"Login Successfull",
   token: await userExist.generateToken(), 
   userId: userExist._id.toString()
   });
 }
  else{
    res.status(401).json({ msg: "Invalid email or password "});
  }
    }

     catch(error){
//   res.status(400).json("internal server error ");
     next(error); 
     }
 }




//    To send user data user logic 
 
 const user =  async (req, res)=>{
   try{
   const userData = req.user;
   console.log(userData)
    return res.status(200).json({ userData})
   }
   catch( error){
 console.log(`erroe from the user route ${error}`);
   }

 }



  module.exports = {home, user, register,login}