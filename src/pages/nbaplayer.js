import React, {useState, useEffect} from 'react';
const Nbaplayer = () => {
    const [players, setPlayers] = useState([]);
    const [teams,setTeams] = useState("All");
    const [team,setTeam] = useState([]);
    const [positions, setPositions] = useState("All");
    const [position, setPosition] = useState([]);
9
    // cost [,] = useState([]);
    async function onPageLoad(e){
        try{
            e.preventDefault();
            const response = await fetch('http://localhost:5000/search/?team='+team+'&position='+position);
            const parseResponse = await response.json();
            setPlayers(parseResponse);
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

    return (
    <div className='Players'>
        <Form onSubmit = {onPageLoad} className = "filterform" style = {{marginTop: 25}}>
            <label>Team Name:</label>
            <select name = 'teamValue' size={teams.size + 1} onChange={e => setTeam(e.target.value)}>
                <option value="All">All</option>
                {teams.map(team => (
                    <option value={team.team_name}>{team.team_name}</option>
                ))}
            </select>
            <select name = 'positionValue' size={positions.size + 1} onChange={e => setPositions(e.target.value)}>
                <option value="All">All</option>
                {positions.map(position => (
                    <option value={position.position_name}>{position.position_name}</option>
                ))}
            </select>
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
