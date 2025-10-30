 const jwt = require('jsonwebtoken');
  const User = require('../models/user_models');

  const authMiddleware =  async( req, res, next)=>{
 const token = req.header("Authorization");
 if(!token){
  return res
  .status(401)
  .json({message:"unauthorized http , token is not provided "});
 }

//   assuming token is in the format "Bearer<token>, reomoving the "Berare" prefix "

 const jwtToken = token.replace("Bearer", "").trim();
 console.log("token from auth middlleware",jwtToken)

 try{

   const isVerified = jwt.verify(jwtToken,process.env.JWT_SECRET_KEY);
  
    const userData = await User.findOne({email:isVerified.email})
    .select({
      password:0,
    });

    console.log(userData);
    req.user = userData;
    req.token = token;
    req.userID = userData._id;
     next();

 }
  catch(error){
    return res.status(401).json({message:"unauthorized http , token is not provided "});
  }


  };

   module.exports = authMiddleware;