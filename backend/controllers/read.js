const User = require('../models/user')
let crypto = require('crypto')

const Auth = async (req, res) => {

    var { email, senha } = req.body

    const hash = crypto.createHash('sha256').update(senha).digest('hex');

    senha = hash

    const user = await User.findOne({ where: { email, senha } })

    if (user)
        return res.status(200).send({ status: 200 });

    if (!user)
        return res.status(400).send({ status: 400 });
}

module.exports = Auth