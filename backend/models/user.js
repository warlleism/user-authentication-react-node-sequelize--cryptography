const { Model, DataTypes } = require('sequelize')

class Usuarios extends Model {
    static init(sequelize) {
        super.init({
            email: DataTypes.STRING,
            senha: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = Usuarios