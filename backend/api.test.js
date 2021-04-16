const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("./server");
var expect = chai.expect;

chai.use(chaiHttp);

describe("all tests ", () => {
  it("Check if immatriculation number is a 9 carac string length", function (done) {
    const employee = {
      full_name: "full name",
      phone: "+21260000000000",
      immatr: "0123456",
      email: "test@gmail.com",
      password: "123456789",
      cin : "HH565656"
    };
    chai
      .request("http://localhost:5000")
      .post("/employee/add")
      .send(employee)
      .end((err, res) => {
        if (res.body.data.immatr.length == 9) {
          expect(res).to.have.status(200);
        } else {
          console.log(err);
        }
        done();
      });
  });
  it("check if token is valid", function (done) {
    const employee = {
      immatr: "3456787645678",
      password: "password123",
    };
    chai
      .request("http://localhost:5000")
      .post("/employee/login")
      .send(employee)
      .end((err, res) => {
        if (res.text === "email or password Incorrect") {
          console.log("invalid token");
        } else {
          expect(res).to.have.status(200);
          done();
        }
      });
  });
});
