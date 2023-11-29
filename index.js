const express = require ('express')
const app = express()
const mysql = require('mysql2')
const PORT = 3000
app.use(express.json())

const newDataBase = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'M00nch1ldr3n?'
})
newDataBase.connect()

app.get('/createdb', (req,res) => {
    const sql = 'CREATE DATABASE newDataBase'
    newDataBase.query(sql,(err,result) => {
        if(err)throw err;
        console.log(result)
        res.send('Database created')
    })
})

app.listen(PORT, () => {
    console.log(`Server working at port ${PORT} `);
})