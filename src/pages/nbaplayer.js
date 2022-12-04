import React, {useState, useEffect} from 'react';
import {Form} from 'reactstrap'
const Nbaplayer = () => {
    const [players, setPlayers] = useState([]);
    const [teams,setTeams] = useState([]);
    const [team,setTeam] = useState([]);
    const [positions, setPositions] = useState([]);
    const [position, setPosition] = useState([]);

    // cost [,] = useState([]);
    async function onPageLoad(e){
        try{
            // e.preventDefault();
            const response = await fetch('http://localhost:5000/search/?team='+team+'&position='+position);
            const parseResponse = await response.json();
            setPlayers(parseResponse);
            console.log(parseResponse);
        }
        catch (error) {
            console.error(error.message)
        }
    }

    async function showAllPlayers(){
        try{
            const response = await fetch('http://localhost:5000/total_players')
            const parseResponse = await response.json();
            setPlayers(parseResponse);
        }
        catch (error) {
            console.error(error.message)
        }
    }

    async function getTeamNames(){
        try {
            const response = await fetch('http://localhost:5000/teams')
            const parseResponse = await response.json();
            setTeams(parseResponse);
        } catch (error) {
            console.error(error.message)
        }
    }

    async function getPositions(){
        try {
            const response = await fetch('http://localhost:5000/positions')
            const parseResponse = await response.json();
            setPositions(parseResponse);
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        showAllPlayers();
      }, []);
    
      useEffect(() => {
        getTeamNames();
      }, []);

      useEffect(() => {
        getPositions();
      }, []);

    //   useEffect(() => {
    //     onPageLoad();
    //   }, []);

    return (
    <div className='Players'>
        <Form style = {{marginTop: 25 }}>
            <label>Team Name:</label>
            {<select name = 'teamValue' size={teams.size + 1} onChange={e => setTeam(e.target.value)}>
                <option value="All">All</option>
                {teams.map(team => (
                    <option value={team.team_name}>{team.team_name}</option>
                ))}
            </select> }
            <label>Position:</label>
            <select name = 'positionValue' size={positions.size + 1} onChange={e => setPosition(e.target.value)}>
                <option value="All">All</option>
                {positions.map(position => (
                    <option value={position.player_position}>{position.player_position}</option>
                ))}
            </select>
            <button type="button" style= {{marginLeft:20}}>  
            Submit
            </button>
        </Form>
       <table className='tablePlayer'>
            <thead>
                <th>Name</th>
                <th>Team</th>
                <th>Position</th>
                <th>Age</th>
            </thead>
            <tbody>
                {players.map(player => (
                    <tr key={player.player_name}>
                        <td>{player.player_name}</td>
                        <td>{player.team_name}</td>
                        <td>{player.player_position}</td>
                        <td>{player.player_age}</td>
                    </tr>
                ))
                }
            </tbody>
        </table> 
    </div>
    );
};

export default Nbaplayer;
