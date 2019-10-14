let express = require('express');
let router = express.Router();
let Cattery = require('../db/models/Cattery');

router.get('/', async function(req, res) {
    let cats = await Cattery.query()
        //.eager('children')
        .orderBy('id');
    res.json(cats);
});

/**
 *
 */
router.get('/:id(\\d+)', async function(req, res) {
    res.json(
        Cattery.query()
          .where('id', req.params.id)
    );
});

/**
 *
 */
router.post('/add', async function(req, res) {
    try {
        let newCattery = await Cattery.query().insert(req.body);

        if (newCattery) {
            res.json({success: true, data: newCattery});
        }
        else {
            throw new Error('Something went wrong while inserting a cattery.');
        }
    }
    catch (error) {
        res.status(400);
        res.json({success: false, error: error.message});
    }
});

module.exports = router;
