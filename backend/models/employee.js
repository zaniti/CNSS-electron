var dbConn = require("../config/config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

var Employee = function (employee) {
  this.full_name = employee.full_name;
  this.email = employee.email;
  this.phone = employee.phone;
  this.cin = employee.cin;
  this.immatr = employee.immatr;
  this.password = employee.password;
};

Employee.create = async function (newEmployee, result) {

  dbConn.query(
    "INSERT INTO employees set ?", newEmployee, function (err, res) {
                                                if (err) {
                                                    console.log("error: ", err);
                                                    result(err, null);
                                                } else {
                                                    result(null, res);
                                                }
                                                }
    );
 };

Employee.login = function (immatr, password, result) {
  dbConn.query(
    `SELECT * FROM employees WHERE immatr = "${immatr}" `,
    async function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        const validPass = await bcrypt.compare(password, res[0].password);
        if (validPass) {
          const token = jwt.sign(
            { id: res[0].id, email: res[0].email, immatr : res[0].immatr },
            process.env.EMPLOYEE_TOKEN_KEY
          );
          result(token);
        } else {
          result("email or password are incorrect");
        }
      }
    }
  );
};

Employee.findById = function (id, result) {
    dbConn.query("Select * from employees where id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
    };
 

module.exports = Employee;
