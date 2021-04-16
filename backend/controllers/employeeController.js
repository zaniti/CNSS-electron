const Employee = require("../models/employee");
const { sendMail } = require("../methods/mail");
const bcrypt = require('bcryptjs')

exports.create = async function (req, res) {
  const employeePass = req.body.password
  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);
  const newEmployee = new Employee(req.body);
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
  Employee.create(newEmployee, function (err, employee) {
    if (err) {
      res.send(err);
    } else {
      sendMail(newEmployee.email, employeePass);
      res.json({
        data: newEmployee,
      });
    }
  });
}
};

exports.login = function (req, res) {
  Employee.login(req.body.immatr, req.body.password, (err, employee) => {
    if (err) res.send(err);
    res.json(employee);
  });
};

exports.findById = function(req, res) {
    Employee.findById(req.params.id, function(err, employee) {
      if (err)
      res.send(err);
      res.json(employee);
    });
    };
