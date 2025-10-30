

//  const validate  = (schema)=>  async ( req, res, next)=>{

//  try{
//    const parseBody = await schema.parseAsync(req.body)
//    req.body = parseBody;
//    next();
//  }
 
//  catch(err){
//    const status = 422;
//   const message = 'Fill the input properly';
//     const extraDetail = err.errors[0].message;


//   const error = {
//     status,
//     message,
//     extraDetail
//   };
//   console.log(message)
//   //  res.status(400).json({msg:message})
//    next(message)
//  }


//  };
 
//   module.exports = validate;


const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 422;
    const message = "Validation Error";
    const errors = err.errors.map((e) => ({
      path: e.path.join("."),
      message: e.message,
    }));

    console.log("Validation failed:", errors);

    // Respond with detailed validation errors
    res.status(status).json({
      status,
      message,
      errors,
    });
  }
};

module.exports = validate;




