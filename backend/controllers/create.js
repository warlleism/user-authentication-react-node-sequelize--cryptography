const User = require('../models/user')
let crypto = require('crypto')


const CreateUser = async (req, res) => {

    var { email, senha } = req.body

    const user = await User.findOne({ where: { email } })

    if (user)
        return res.status(200).send({ error: 'User early existis ' });

    try {

        const hash = crypto
            .createHash('sha256')
            .update(senha)
            .digest('hex');

        senha = hash;

        const user = await User.create({ email, senha })

        return res.status(200).send({ status: 200, sucess: 'Castrado com sucesso' });


    } catch (err) {
        res.status(400).send({ error: 'Registration failed ' + err });
    }

}

module.exports = CreateUser