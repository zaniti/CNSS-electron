const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

/**
 * @swagger
 * /employee/add:
 *   post:
 *     summary: Add an employee.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               full_name:
 *                 type: string
 *                 description: The employee's name.
 *                 example: Abdellah Daif
 *               phone:
 *                 type: string
 *                 description: The employee's phone.
 *                 example: +212678787878
 *               cin:
 *                 type: string
 *                 description: The employee's cin.
 *                 example: HH676767
 *               immatr:
 *                 type: string
 *                 description: The employee's immatriculation number.
 *                 example: 123456789
 *               password:
 *                 type: string
 *                 description: The employee's password.
 *                 example: password123
 *               email:
 *                 type: string
 *                 description: The employee's email.
 *                 example: employee123@gmail.com
 *     responses:
 *       201:
 *         description: A successful response
*/
router.post("/add", employeeController.create);

/**
 * @swagger
 * /employee/login:
 *   post:
 *     summary: Employee login.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               immatr:
 *                 type: string
 *                 description: The employee's immatriculation number.
 *                 example: 123456789
 *               password:
 *                 type: string
 *                 description: The employee's password.
 *                 example: password123
 *     responses:
 *       201:
 *         description: A successful response with a valid token
*/
router.post("/login", employeeController.login);

/**
 * @swagger
 * /employee/{id}:
 *  get:
 *    summary: Get employee by id.
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 */

router.get('/:id', employeeController.findById);

module.exports = router;
