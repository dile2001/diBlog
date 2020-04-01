import { MongoClient } from 'mongodb';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
const withDB = async (operations, res) => {
    try {
//         const uri = "mongodb+srv://ditest:jkl123Gau@cluster0-ovrpy.mongodb.net/test?retryWrites=true&w=majority";
//         const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
        const client = await MongoClient.connect('mongodb+srv://ditest:jkl123Gau@cluster0-ovrpy.mongodb.net/test?retryWrites=true&w=majority');
        const db = client.db('Myblog');
    
        await operations(db);
    
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }
}
app.get('/api/articles/:name', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.name;

        const articleInfo = await db.collection('Articles').findOne({ name: articleName })
        res.status(200).json(articleInfo);
    }, res);
});
app.listen(8000, () => console.log('Listening on port 8000'));