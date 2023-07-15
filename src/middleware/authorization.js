const Joi = require('joi');
const HTTPError = require('../error/httpError');
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if the authorization header is present and has the expected format
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Perform authentication logic here
  // You can validate the authentication token or perform any other necessary checks
  // If authentication fails, return an error response

  next();
};
const lineSchema = Joi.object({
  line: Joi.object({
    type: Joi.string().valid('LineString').required(),
    coordinates: Joi.array()
      .items(Joi.array().length(2).items(Joi.number()))
      .length(2)
      .required(),
  }).required(),
});
const bodyValidator = (req,res,next)=>{
  const body  = req.body;
  const {error} = lineSchema.validate(body);
  if(error){
    return res.status(401).json({ error: 'Wrong request body' });
  }
next();
}
module.exports = {authMiddleware,bodyValidator};