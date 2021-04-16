const Agent = require('../models/agent');
const bcrypt = require("bcryptjs");

exports.create = async function(req, res) {
const salt = await bcrypt.genSalt(10);
req.body.password = await bcrypt.hash(req.body.password, salt);
const new_agent = new Agent(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Agent.create(new_agent, function(err, agent) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Agent added successfully!",data:agent});
});
}
};

exports.login = function (req, res) {
    Agent.login(req.body.email, req.body.password, (err, agent) => {
      if (err) res.send(err);
      res.json(agent);
    });
  };