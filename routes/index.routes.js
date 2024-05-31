const express = require('express');
const router = express.Router();

const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");

// Home routes
router.get('/', (req, res) => {
    res.render('index', { user: req.user });
});

router.get('/logout', (req, res) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

// other routes
router.use('/auth', authRoutes);
router.use("/users", userRoutes);


module.exports = router;
