module.exports = {
    create: (req, res) => {
        
        let { name, description, price, imageurl } = req.body
        const db = req.app.get('db');

    db.create_product([name, description, price, imageurl]).then(newProduct => {
        res.sendStatus(200);
    })
    .catch(err => console.log('Error in db.create_product', err));
    },
    getOne: (req, res) => {
        let { id } = req.params;
        console.log(id);
        
        const db = req.app.get('db');

        db.read_product([id]).then(readProduct => {
            console.log(readProduct);
            
            res.send(readProduct);
        })
        .catch(err => console.log('Error in db.read_product', err));
    },
    getAll: (req, res) => {
        const db = req.app.get('db');

        db.read_products().then(readProducts => {
            res.send(readProducts);
        })
        .catch(err => console.log('Error in db.read_product', err));
    },
    update: (req, res) => {
        let { id } = req.params
        let { desc } = req.query;
        const db = req.app.get('db');

        db.update_product([id, desc]).then(updateProduct => {
            res.sendStatus(200);
        })
        .catch(err => console.log('Error in db.read_product', err));
    },
    delete: (req, res) => {
        let { id } = req.params;
        const db = req.app.get('db');

        db.delete_product([id]).then(deleteProduct => {
            res.sendStatus(200);
        })
        .catch(err => console.log('Error in db.read_product', err));
    }
}
