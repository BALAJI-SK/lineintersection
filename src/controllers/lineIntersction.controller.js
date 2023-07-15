const lineIntersctionService = require('../services/lineIntersection.service');
const HTTPError = require('../error/httpError');
const intersections = (req,res)=>{
  try{
    if(req.body.empty()){
     throw(new HTTPError(404,'Request body is not given'));
    }
  const line = req.body;
  const data =lineIntersctionService(line); 
  res.status(200).json(data);

  }
  catch (error){
  if(error instanceof HTTPError){
    res.status(error.statusCode).json(error.message);
  }
  res.send(500).json({message:'Internal Server Error'});
  }
}