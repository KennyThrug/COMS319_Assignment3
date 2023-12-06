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

app.get("/getAllPosts", async (req, res) => {
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

app.post("/post", async (req, res) => {
  //console.log(req);
  console.log(req.get('obj_postTitle'));
  var myobj = { id: req.get('obj_id'), postTitle: req.get('obj_postTitle'), author: req.get('obj_author'),
                date: req.get('obj_date'), date_published: req.get('obj_date_published'), genres:  req.get('obj_genres'),
                tags: req.get('obj_tags'), postContents: req.get('obj_postContents') };
  await client.connect();
  console.log("Node connected successfully to POST MongoDB");
  const query = {};
  const results = await db
    .collection("blogposts")
    .insertOne(myobj);
  console.log(results);
  res.status(200);
  res.send(results);
});