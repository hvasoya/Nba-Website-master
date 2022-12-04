/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

 */

// import React from 'react';
// import ReactDOM from 'react-dom';nod
// import App from '../src/App';

// backend start 
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

// ROUTES //

// INSERTIONS

// add new team

app.post("/insertionTeam", async (req, res) => {
  try {
    const { coach_name,team_name,coach_experience } = req.body;

    const newTeam = await pool.query(
      "INSERT INTO team (coach_name,team_name,coach_experience) VALUES($1, $2, $3) RETURNING *",
      [coach_name,team_name,coach_experience]
    );

    res.json(newTeam.rows);

  } catch (err) {
    console.error(err.message);
  }
});

// add new player
app.post("/insertionPlayer", async (req, res) => {
  try {
    const { player_name,team_name,player_position,player_age } = req.body;

    const newPlayer = await pool.query(
      "INSERT INTO player (player_name,team_name,player_position,player_age) VALUES($1, $2, $3, $4) RETURNING *",
      [player_name,team_name,player_position,player_age]
    );

    res.json(newPlayer.rows);

  } catch (err) {
    console.error(err.message);
  }
});

// add new salary
app.post("/insertionSalary", async (req, res) => {
  try {
    const { player_ID, player_name,player_salary } = req.body;

    const newSalary = await pool.query(
      "INSERT INTO salary (player_ID, player_name,player_salary) VALUES($1, $2, $3) RETURNING *",
      [player_ID, player_name,player_salary]
    );

    res.json(newSalary.rows);

  } catch (err) {
    console.error(err.message);
  }
});


// add new championship
app.post("/insertionChampionship", async (req, res) => {
  try {
    const { champ_year, champ_team_name, team_result } = req.body;

    const newChampionship = await pool.query(
      "INSERT INTO championship (champ_year, champ_team_name, team_result) VALUES($1, $2, $3) RETURNING *",
      [champ_year, champ_team_name, team_result]
    );

    res.json(newChampionship.rows);

  } catch (err) {
    console.error(err.message);
  }
});

// SHOW ALL TABLES:

// get all teams

app.get("/total_teams", async (req, res) => {
  try {
    const allTeams = await pool.query("SELECT * FROM team");

    res.json(allTeams.rows);

  } catch (err) {
    console.error(err.message);
  }
});


// get all players

app.get("/total_players", async (req, res) => {
  try {
    const allPlayers = await pool.query("SELECT * FROM player");

    res.json(allPlayers.rows);

  } catch (err) {
    console.error(err.message);
  }
});
// get all salaries

app.get("/total_salaries", async (req, res) => {
  try {
    const allSalaries = await pool.query("SELECT * FROM salary");

    res.json(allSalaries.rows);

  } catch (err) {
    console.error(err.message);
  }
});
// get all championships

app.get("/total_championships", async (req, res) => {
  try {
    const allChampionships = await pool.query("SELECT * FROM championship");

    res.json(allChampionships.rows);

  } catch (err) {
    console.error(err.message);
  }
});

// FILTERING

// for teams, filter by coach_experience over 10 years
app.get("/total_teams/:greater10", async (req, res) => {
  try {
      const {coach_experience} = req.params;

      const team_filter_output = await pool.query("SELECT * FROM team WHERE coach_experience > 10");
    
       
      res.json(team_filter_output.rows);

  } catch (error) {
      console.error(error.message)
  }
})

// for players, filter by team_name & player position
app.get("/total_players/:team_name_value", async (req, res) => {
  try {
      const {team_name_value} = req.params;

      const player_filter_output1 = await pool.query("SELECT * FROM player WHERE team_name = $1", [team_name_value]);
  
       
      res.json(player_filter_output1.rows);

  } catch (error) {
      console.error(error.message)
  }
})

// NOT WORKING !!!! FILTER BY POSITION...

// app.get("/total_players/:player_position_value", async (req, res) => {
//   try {
//       const {player_position_value} = req.params;

//       const player_filter_output2 = await pool.query("SELECT * FROM player WHERE player_position = $1", [''+ player_position_value +'']);
  
       
//       res.json(player_filter_output2.rows);

//   } catch (error) {
//       console.error(error.message)
//   }
// })


// for championships, filter by winning teams ONLY

app.get("/total_championships/:result_champ", async (req, res) => {
  try {
      const {result_champ} = req.params;

      const championship_filter_output = await pool.query("SELECT * FROM championship WHERE team_result = $1", [result_champ]);
       
      res.json(championship_filter_output.rows);

  } catch (error) {
      console.error(error.message)
  }
})

app.get("/teams", async (req, res) => {
  try {
      // const {team_name_value} = req.params;

      const allTeams = await pool.query("SELECT team_name FROM team");

      res.json(allTeams.rows);

  } catch (error) {
      console.error(error.message)
  }
})


app.get("/positions", async (req, res) => {
  try {
      // const {team_name_value} = req.params;

      const allPositions = await pool.query("SELECT DISTINCT player_position FROM player");

      res.json(allPositions.rows);

  } catch (error) {
      console.error(error.message)
  }
})

app.get("/search", async (req, res) => {
  try {
      const {team,position} = req.query;

      var modifiedQuery = await pool.query("SELECT * FROM player WHERE player_position = $1 and team_name = $2",[position, team]);

      
      // if(teams == "All" && positions == "All")
      // {
      //   modifiedQuery = await pool.query("SELECT * FROM player");
      // }
      // else if(teams == "All")
      // {
      //   modifiedQuery = await pool.query("SELECT * FROM player WHERE player_position = $1",[position]);
      // }
      // else if(positions == "All")
      // {
      //   modifiedQuery = await pool.query("SELECT * FROM player WHERE team_name = $1",[team]);
      // }
      // else
      // {
      //   modifiedQuery = await pool.query("SELECT * FROM player WHERE player_position = $1 and team_name = $2",[position, team]);
      // }
      
      res.json(modifiedQuery.rows);
  } catch (error) {
      console.error(error.message)
  }
})

app.get("/search/team", async (req, res) => {
  try {
      const {minExperience, maxExperience} = req.query;

      var modifiedQuery;
      
      if(teams == "All" && positions == "All")
      {
        modifiedQuery = await pool.query("SELECT * FROM player");
      }
      else if(teams == "All")
      {
        modifiedQuery = await pool.query("SELECT * FROM player WHERE positions = $1",[positions]);
      }
      else if(positions == "All")
      {
        modifiedQuery = await pool.query("SELECT * FROM player WHERE teams = $1",[teams]);
      }
      
      res.json(modifiedQuery.rows);
  } catch (error) {
      console.error(error.message)
  }
})

// UPDATE:

// updating teams

app.put("/total_teams/:team_name", async (req, res) => {
  try {
    const { team_name} = req.params;
    const { coach_name, coach_experience } = req.body;
    const updateTeam = await pool.query(
      "UPDATE team SET coach_name = $1, coach_experience = $2 WHERE team_name = $3",
      [coach_name,coach_experience, team_name]
    ); 

    res.json(updateTeam.rows);
    // res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }

});

// updating players

app.put("/total_players/:player_name", async (req, res) => {
  try {
    const {player_name} = req.params;
    const { team_name, player_position, player_age } = req.body;
    const updatePlayer= await pool.query(
      "UPDATE player SET team_name = $1, player_position = $2, player_age = $3 WHERE player_name = $4",
      [team_name, player_position, player_age, player_name  ]
    ); 

    res.json(updatePlayer.rows);
    // res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }

});

// updating championships

// app.put("/total_championships/:player_name", async (req, res) => {
//   try {
//     const {player_name} = req.params;
//     const { team_name, player_position, player_age } = req.body;
//     const updatePlayer= await pool.query(
//       "UPDATE team SET team_name = $1, player_position = $2, player_age = $3 WHERE player_name = $4",
//       [team_name, player_position, player_age, player_name  ]
//     ); 

//     res.json(updateChampionships.rows);
//     // res.json("Todo was updated!");
//   } catch (err) {
//     console.error(err.message);
//   }

// });

// updating salaries

app.put("/total_salaries/:player_ID", async (req, res) => {
  try {
    const {player_ID} = req.params;
    const { player_name, player_salary } = req.body;
    const updateSalaries= await pool.query(
      "UPDATE salary SET player_name = $1, player_salary = $2 WHERE player_ID = $3",
      [player_name, player_salary, player_ID ]
    ); 

    res.json(updateSalaries.rows);
    // res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }

});


// DELETION:

// deleting a team

app.delete("/total_teams/:team_name", async (req, res) => {
  try {
    const { team_name} = req.params;
    const deleteTeam = await pool.query("DELETE FROM team WHERE team_name = $1", [team_name]
    );
    res.json("Team was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

// delete a player
app.delete("/total_players/:player_name", async (req, res) => {
  try {
    const { player_name} = req.params;
    const deletePlayer= await pool.query("DELETE FROM player WHERE player_name = $1", [player_name]
    );
    res.json("Player was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

// delete a salary

app.delete("/total_salaries/:player_ID", async (req, res) => {
  try {
    const { player_ID} = req.params;
    const deleteSalary = await pool.query("DELETE FROM salary WHERE player_ID = $1", [player_ID]
    );
    res.json("Salary was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});






// server status
app.listen(5000,() => {
  console.log("server has started on port 5000");
});


// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );
