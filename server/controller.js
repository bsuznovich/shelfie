module.exports = {
    getInventory: (req,res) => {
        const db = req.app.get('db')
        db.get_inventory().then(response => {
                res.status(200).send(response)
            })
    },

    addProduct: (req,res) => {
        const db = req.app.get('db')
        res.status(200).send(console.log('Bag of garbage','5','image of garbage'))
    }
}