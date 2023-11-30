const express = require ('express')
const app = express()
const mysql = require('mysql2')
const PORT = 3000
app.use(express.json())

const newDataBase = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'M00nch1ldr3n?',
    database: 'newDataBase'
})
newDataBase.connect()

//Ejercicio 1:
app.get('/createdb', (req,res) => {
    const sql = 'CREATE DATABASE newDataBase'
    newDataBase.query(sql,(err,result) => {
        if(err)throw err;
        console.log(result)
        res.send('Database created')
    })
})

app.get('/createTable', (req,res) =>{
    const sql = 'CREATE TABLE products(id int AUTO_INCREMENT, name VARCHAR (50), price VARCHAR (50), PRIMARY KEY(id))'
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        console.log(result)
        res.send('Products table created')
    })
})

app.get('/createTable3', (req,res) => {
    const sql = 'CREATE TABLE OtherTable(id int AUTO_INCREMENT, categories VARCHAR(50), patata VARCHAR(50), PRIMARY KEY(id))'
    newDataBase.query(sql, (err,result) => {
        if(err) throw err
        console.log(result)
        res.send('Categories table created')
    })
})

//Ejecicio 2:
app.post("/", (req, res) => {
    const sql = `INSERT INTO products (name, price) values ('${req.body.name}', '${req.body.price}'), ('${req.body.name}', '${req.body.price}')`
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        console.log(req.body)
        res.send('Products added')
    })
})

app.post("/categories", (req,res) => {
    const sql = `INSERT INTO categories (categories) values ('${req.body.categories}'), ('${req.body.categories}')`
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        console.log(req.body)
        res.send('Categories added')
    })
})

//Ejercicio 3:
app.put("products/id/:id", (req, res) => {
    const newProduct = "Update product"
    const sql = `UPDATE products SET name = '${newProduct}' WHERE id = ${req.params.id}` 
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        console.log(req.params)
        res.send('Product updated')
    })
})

app.put("categories/id/:id", (req, res) => {
    const newCategory = "Update category"
    const sql = `UPDATE categories SET categories = '${newCategory}' WHERE id = ${req.params.id}`
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        console.log(req.params)
        res.send('Categories updated')
    })
})

//Ejercicio 4:
// Endpoint para mostrar todos los productos
app.get('/products', (req, res) => {
    const sql = `SELECT * FROM products`
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        res.send({ message: 'Get products', })
    })
})

// Endpoint para mostrar todas las categorías
app.get('/categories', (req, res) => {
    const sql =`SELECT * FROM categories`
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        res.send({message: 'Get categories'})
    })
})

// Endpoint para mostrar todos los productos con sus categorías
app.get('/products-categories', (req, res) => {
    const sql = 'SELECT * FROM Products LEFT JOIN Categories ON Products.categoriesId = Categories.id'
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        res.send({message: 'Products and Categories'})
    })
})


// Endpoint para seleccionar un producto por id
app.get('products/id/:id', (req, res) => {
    const sql = `SELECT * FROM products WHERE id = ${req.params.id}`
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        res.send(result)
    })
})

// Endpoint para mostrar productos de forma descendente
app.get('/products-desc', (req, res) => {
    const sql = `SELECT * FROM products ORDER BY id DESC`
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        res.send(result)
    })
})

// Endpoint para seleccionar una categoría por id
app.get('categories/id/:id', (req, res) => {
    const sql = `SELECT * FROM categories WHERE id = ${req.params.id}`
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        res.send(result)
    })
})

// Endpoint para mostrar categorías de forma descendente
app.get('/categories-desc', (req, res) => {
    const sql = `SELECT * FROM categories ORDER BY id DESC`
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        res.send(result)
    })
})

//Ejercicio 5:
// app.delete('/products/id/:id', (req, res) => {
//     const sql = `DELETE FROM products WHERE id = ${req.params.id} `
//     newDataBase.query(sql, (err, result) => {
//         if(err) throw err
//         console.log(req.params)
//         res.send('Product deleted')
//     })
// })

app.listen(PORT, () => {
    console.log(`Server working at port ${PORT} `);
})