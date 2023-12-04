const express = require ('express')
const app = express()

const PORT = 3000

app.use(express.json())

app.use('/dataBase', require('../config/Controllers/DataBase-Controller.js')),
app.use('/Categories', require('../config/Controllers/CategoriesController.js')),
app.use('/products', require('../config/Controllers/ProductsController.js'))

app.listen(PORT, () => {
    console.log(`Server working at port ${PORT} `);
})