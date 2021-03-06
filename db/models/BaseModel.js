const { Model, transaction, snakeCaseMappers } = require('objection');

class BaseModel extends Model {
    static get idColumn() {
        return 'id';
    }

    static get columnNameMappers() {
        return snakeCaseMappers({ upperCase: false });
    }

    static get modelPaths() {
        return [__dirname];
    }
}

module.exports = BaseModel;
