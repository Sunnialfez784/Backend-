require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const github = {
  "login": "Sunnialfez784",
  "id": 177997746,
  "node_id": "U_kgDOCpwHsg",
  "avatar_url": "https://avatars.githubusercontent.com/u/177997746?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Sunnialfez784",
  "html_url": "https://github.com/Sunnialfez784",
  "followers_url": "https://api.github.com/users/Sunnialfez784/followers",
  "following_url": "https://api.github.com/users/Sunnialfez784/following{/other_user}",
  "gists_url": "https://api.github.com/users/Sunnialfez784/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Sunnialfez784/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Sunnialfez784/subscriptions",
  "organizations_url": "https://api.github.com/users/Sunnialfez784/orgs",
  "repos_url": "https://api.github.com/users/Sunnialfez784/repos",
  "events_url": "https://api.github.com/users/Sunnialfez784/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Sunnialfez784/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Sunni Alfez",
  "company": "Appsile",
  "blog": "",
  "location": "una-gujarat",
  "email": null,
  "hireable": null,
  "bio": "i'm learning with React.js and Python",
  "twitter_username": null,
  "public_repos": 10,
  "public_gists": 0,
  "followers": 4,
  "following": 5,
  "created_at": "2024-08-10T04:45:30Z",
  "updated_at": "2026-09-05T18:32:12Z"
}

app.get('/', (req,res) => {
    res.send('Hello')
})

app.get('/name', (req,res) => {
    res.send('Sunnialfez')
})

app.get('/insta', (req,res) => {
    res.send('Sunnialfez784')
})

app.get('/linkdin', (req,res)=> {
    res.send('<a href="https://www.linkedin.com/in/alfez-sunni-335176371/">Go To Linkdin</a>')
})

app.get('/github', (req, res) => {
    res.json(github)
})

app.listen(process.env.PORT, () => {
    console.log(`Express app listening on port ${port}`)
})