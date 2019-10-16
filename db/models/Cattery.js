const BaseModel = require('./BaseModel');

class Cattery extends BaseModel {

    static get tableName() {
        return 'cattery';
    }
}

module.exports = Cattery;
