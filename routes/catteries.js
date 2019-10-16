let express = require('express');
let router = express.Router();
let Cattery = require('../db/models/Cattery');

router.get('/', async function(req, res) {
    res.json(
        await Cattery.query()
          .orderBy('id')
    );
});

/**
 *
 */
router.get('/:id(\\d+)', async function(req, res) {
    res.json(
        await Cattery.query()
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

router.put('/:id(\\d+)', async function(req, res) {
    res.json(
      await Cattery.query()
        .updateAndFetchById(req.params.id, req.body)
    );
});

router.patch('/:id(\\d+)', async function (req, res) {
    res.json(
      await Cattery.query()
        .patchAndFetchById(req.params.id, req.body)
    );
});

router.delete('/:id(\\d+)', async function(req, res) {
    let success = await Cattery.query()
        .deleteById(req.params.id) === 1;

    res.json({success});
});


module.exports = router;
