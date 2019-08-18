const router = require('express').Router();
const User = require('../models/User');

router.post('', async (req, res) => {

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try {
        console.debug("Saving user...");
        const savedUser = await user.save();
        console.debug(`User saved: ${savedUser}`);
        res.send(savedUser);
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }

});

module.exports = router;
