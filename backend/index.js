const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const { json } = require("express/lib/response");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      {username: username, secret: username, first_name: username},
      {headers: {"private-key": "3b2a35cb-4f66-41a7-9d08-3b6c4c167310"}}
    )
    return res.status(r.status).json(r.data)
  } catch (e) {
    return res.status(e.response.status).json(e.response.data)
    
  }

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);
