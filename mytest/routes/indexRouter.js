const router = require('express').Router();


router.get('/try', (req, res) => {
    res.json({
        mess: 'hello'
    })
})





module.exports = router;