const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { check } = require('express-validator');

const methodOverride = require('method-override');
router.use(methodOverride('_method'));

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.get('/:id/edit', userController.editUser);
router.post('/:id', 
[
    check('name').notEmpty().withMessage('Name is required'),
    check('imageUrl').optional().isURL().withMessage('Invalid image URL')
], 
userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
