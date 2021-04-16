var dbConn = require('../config/config');
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

var Agent = function(agent){
  this.email     = agent.email;
  this.password      = agent.password;
};
Agent.create = function (newAgent, result) {
dbConn.query("INSERT INTO agents set ?", newAgent, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};

Agent.login = function (email, password, result) {
    dbConn.query(
      `Select * from agents where email = "${email}"`,

      async function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
        } else {
            const validPass = await bcrypt.compare(password, res[0].password);
            if (validPass) {
              const token = jwt.sign(
                { id: res[0].id, email: res[0].email },
                process.env.AGENT_TOKEN_KEY
              );
              result(token);
            } else {
              result("email or password Incorrect");
            }
        }
      }
    );
  };

module.exports= Agent;