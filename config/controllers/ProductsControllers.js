const newDataBase = require ('..database.js')

const ProductController = {
    create(req,res) {
        let products = {name:req.body.name, body:req.body.body}
        let sql = 'INSERT INTO products SET ?'
        newDataBase.query(sql, products, (err, result) => {
            if(err) throw err
            console.log(result);
            res.send('Products added')
        })
    }
}

module.exports = ProductController
