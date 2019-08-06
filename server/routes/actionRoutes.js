const mongoose = require('mongoose')

const Actions = mongoose.model('actions')

module.exports = app => {
    app.get('/api/actions', async (req, res) => {
        try {
            const result = await Actions.find().exec();
            res.send(result);
        } catch (err) {
            res.status(500).send(err);
        }
    })
}