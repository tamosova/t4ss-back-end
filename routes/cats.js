let express = require('express');
let router = express.Router();
let Cat = require('../db/models/Cat');

router.get('/', async function(req, res) {
    let cats = await Cat.query()
        //.eager('[sire, dam, damOf, sireOf]')
        .orderBy('id');
    res.json(cats);
});

/**
 *
 */
router.get('/:id(\\d+)', async function(req, res) {
    res.json(
        await Cat.query()
          .eager('[sire, dam, damOf, sireOf]')
          .where('id', req.params.id)
    );
});

/**
 *
 */
router.post('/add', async function(req, res) {
    try {
        let newCat = await Cat.query().insert(req.body);

        if (newCat) {
            res.json({success: true, data: newCat});
        }
        else {
            throw new Error('Something went wrong while inserting a cat.');
        }
    }
    catch (error) {
        res.status(400);
        res.json({success: false, error: error.message});
    }
});

module.exports = router;
