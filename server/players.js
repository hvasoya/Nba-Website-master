// const pool = require("./db")
// const router = require("express").Router();
import {Fragment, useEffect, useState} from 'react'
const ListPlayers = () => {
const [player_name, setPlayer_name] = useState([]);

const getPlayers = async () => {
  try {
    const response = await fetch("http://localhost:5000/total_players");
    const jsonData = await response.json();

    setPlayer_name(jsonData);
  } catch (err) {
    console.error(err.message);
  }
};

useEffect(() => {
  getPlayers();
}, []);

};

// import {Button, Form, Row, Col} from 'reactstrap'

// module.exports = router;

// app.get("/total_players", async (req, res) => {
//     try {
//       const allTeams = await pool.query("SELECT * FROM team");
  
//       res.json(allTeams.rows);
  
//     } catch (err) {
//       console.error(err.message);
//     }
//   });
  

export default playerFunction;

 