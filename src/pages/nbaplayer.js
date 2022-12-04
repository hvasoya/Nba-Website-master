import React, {useState, useEffect} from 'react';
const Nbaplayer = () => {
    const [players, setPlayers] = useState([]);

    async function onEnter(){
        try{
            const response = await fetch('http://localhost:5000/total_players')
            const parseResponse = await response.json();
            setPlayers(parseResponse);
        }
        catch (error) {
            console.error(error.message)
        }
    }
    useEffect(() => {
        onEnter();
      }, []);
    
    return (
    <div className='Players'>
        <table className="table my-5">
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
