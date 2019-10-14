const BaseModel = require('./BaseModel');

class Cat extends BaseModel {
    static get tableName() {
        return 'cat';
    }

    // This object defines the relations to other models.
    static get relationMappings() {
        return {
            sire: {
                relation: BaseModel.HasOneRelation,
                // The related model. This can be either a Model
                // subclass constructor or an absolute file path
                // to a module that exports one.
                modelClass: Cat,
                join: {
                    from: 'cat.sire_id',
                    to: 'cat.id'
                }
            },
            dam: {
                relation: BaseModel.HasOneRelation,
                // The related model. This can be either a Model
                // subclass constructor or an absolute file path
                // to a module that exports one.
                modelClass: Cat,
                join: {
                    from: 'cat.dam_id',
                    to: 'cat.id'
                }
            },
            damOf: {
                relation: BaseModel.HasManyRelation,
                modelClass: Cat,
                join: {
                    from: 'cat.id',
                    to: 'cat.dam_id'
                }
            },
            sireOf: {
                relation: BaseModel.HasManyRelation,
                modelClass: Cat,
                join: {
                    from: 'cat.id',
                    to: 'cat.sire_id'
                }
            }
        };
    }
}

module.exports = Cat;
