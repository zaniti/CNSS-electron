require("dotenv").config();
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const express = require("express");
const dbConn = require('./config/config');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const agentRoute = require('./routes/agent')
const employeeRouter = require('./routes/employee')
app.use(express.json());


app.use('/agent', agentRoute)
app.use('/employee', employeeRouter)

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      version: "1.0.0",
      title: "CNSS API",
      description: "CNSS API Information",
      contact: {
        name: "Abdellah Daif (Sketch)"
      },
      servers: ["http://localhost:5000"]
    }
  },
  // ['.routes/*.js']
  apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));



app.listen(port, () => {
    console.log("connected to server " + port);
  });