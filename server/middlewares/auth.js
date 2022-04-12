const { body } = require('express-validator');
exports.checkUserValidation =
    [body('name')
        .not()
        .isEmpty()
        .withMessage("Name Is Required"),
    body('email')
        .isEmail()
        .withMessage("Email Is Required"),
    body('password')
        .isLength({ min: 6 })
        .withMessage("Password must 6 char long")]

