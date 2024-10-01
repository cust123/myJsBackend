require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

const myGitData = {
  login: "cust123",
  id: 28787892,
  node_id: "MDQ6VXNlcjI4Nzg3ODky",
  avatar_url: "https://avatars.githubusercontent.com/u/28787892?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/cust123",
  html_url: "https://github.com/cust123",
  followers_url: "https://api.github.com/users/cust123/followers",
  following_url: "https://api.github.com/users/cust123/following{/other_user}",
  gists_url: "https://api.github.com/users/cust123/gists{/gist_id}",
  starred_url: "https://api.github.com/users/cust123/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/cust123/subscriptions",
  organizations_url: "https://api.github.com/users/cust123/orgs",
  repos_url: "https://api.github.com/users/cust123/repos",
  events_url: "https://api.github.com/users/cust123/events{/privacy}",
  received_events_url: "https://api.github.com/users/cust123/received_events",
  type: "User",
  site_admin: false,
  name: "Muhammad Shafiq",
  company: "BX technologies",
  blog: "bxtechnologies.net",
  location: "Islamabad Pakistan ",
  email: null,
  hireable: null,
  bio: "Software developer || Software Tester || Scrum Master",
  twitter_username: null,
  public_repos: 13,
  public_gists: 0,
  followers: 1,
  following: 2,
  created_at: "2017-05-18T16:55:52Z",
  updated_at: "2024-08-29T08:55:14Z",
};

app.get("/", (req, res) => {
  res.send("Hello World and welcome to JavaScript Backend!");
});

app.get("/twitter", (req, res) => {
  res.send("muhammad Shafiq");
});
app.get("/login", (req, res) => {
  // res.send("<h1>Please Login at Chai aur Code </h1>");
  res.json(myGitData);
});
app.get("/youtube", (req, res) => {
  res.send("<h2>https://www.youtube.com/@chaiaurcode</h2>");
});

app.get("/github", (req, res) => {
  res.json(myGitData);
});
app.listen(process.env.PORT, () => {
  console.log(`welcome to JavaScript Backend! ${port} `);
});
