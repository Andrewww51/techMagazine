const express = require("express");
const path = require("path");
const fs = require("fs");
const morgan = require("morgan");
const cors = require("cors");
const fetch = require("node-fetch");

const server = express();

const port = 3005;
let rawData = fs.readFileSync(path.join(__dirname, "/data/news.json"));
let newsData = JSON.parse(rawData);
const apiUrl =
  "https://newsapi.org/v2/top-headlines?" +
  "country=hu&" +
  "category=technology&" +
  "pageSize=70&" +
  "apiKey=d587087c204349c0b209f24b78e4baf2";

server.use(express.static(path.join(__dirname, "../frontend/build/")));
server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

async function getNews() {
  const response = await fetch(apiUrl);
  const fetchedNewsData = await response.json();
  newsData = fetchedNewsData;
  fs.writeFileSync(
    path.join(__dirname, "/data/news.json"),
    JSON.stringify(newsData)
  );

  console.log("fetch done");
}
getNews();
// setInterval(getNews, 3600000);

server.get("/news", async (req, res) => {
  let older = [];
  let newer = [];
  for (const article of newsData.articles) {
    if (new Date(article.publishedAt).getTime() < req.query.last) {
      older.push(article);
    } else if (new Date(article.publishedAt).getTime() > req.query.first) {
      newer.push(article);
    }
  }
  console.log(newer.length);
  res.json({ older: older.slice(0, req.query.per_page), newer });
});

server.listen(port, () => {
  console.log(`Listening @ http://localhost:${port}`);
});