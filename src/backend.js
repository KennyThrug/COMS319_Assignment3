//Implement Mongo (or other database) Later
var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

// Mongo
const url = "mongodb://127.0.0.1:27017";
const dbName = "reactdata";
const client = new MongoClient(url);
const db = client.db(dbName);

app.use(cors());
app.use(bodyParser.json());
const port = "8081";
const host = "localhost";
app.listen(port, () => {
  console.log("App listening at http://%s:%s", host, port);
});

//----------------------------------------------------

//GET
app.get("/api/get", async (req, res) => {
  await client.connect();
  console.log("Node connected successfully to GET MongoDB");
  const query = {};
  const results = await db
    .collection("fakestore_catalog")
    .find(query)
    .limit(100)
    .toArray();
  console.log(results);
  res.status(200);
  res.send(results);
});

//POST
app.post("/api/post", async (req, res) => {
  console.log("test");
  console.log(req);
  console.log(req.get('obj_title'));
  var myobj = { id: req.get('obj_id'), title: req.get('obj_title'), price: req.get('obj_price'),
                description: req.get('obj_description'), category: req.get('obj_category'), image:  req.get('obj_image'),
                rating: req.get('rating') };
  await client.connect();
  console.log("Node connected successfully to POST MongoDB");
  const query = {};
  const results = await db
    .collection("fakestore_catalog")
    .insertOne(myobj);
  console.log(results);
  res.status(200);
  res.send(results);
});

//PUT
app.put("/api/update", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const category = req.body.category;
  const image = req.body.image;
  const rating = req.body.rating;
  console.log(id, title, price, description, category, image, rating);
  db.query(
    "UPDATE fakestore_catalog SET title=?, price=?, description=?, category=?, image=?, rating=? WHERE id=?",
    [title, price, description, category, image, rating, id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log(result);
        res.status(200).send('Resource Updated');
      }
    }
  );
});

//DELETE
app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM fakestore_catalog WHERE id= ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});