const newDataBase = require ('..database.js')

const CategoriesController = {
    create(req,res) {
        let categories = {categories:req.body.name, body:req.body.body}
        let sql = 'INSERT INTO categories SET ?'
        newDataBase.query(sql, categories, (err, result) => {
            if(err) throw err
            console.log(result);
            res.send('Categories added')
        })
    }
}

module.exports = CategoriesController