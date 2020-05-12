const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies

const port = 5000
app.listen(port, () => console.log(`Server started on ${port}`))

app.post('/api/buy', (req, res) => {
    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://localhost:27017/';

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("shop");
        for (let i = 0; i < req.body.items.length; i++) {
            dbo.collection("products").update({name:req.body.items[i].name},{$inc:{stock:-1}})
        }
        db.close();
    });
    
})

app.get('/api/products', (req, res) =>{

    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://localhost:27017/';

    MongoClient.connect(url, async function(err, db) {

        await db.db('shop').collection('products').find({}).toArray().then(result => {
            res.json(result)
        });

    });
    
})