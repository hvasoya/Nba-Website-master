import React from 'react';


const Nbaplayer = () => {
<<<<<<< Updated upstream
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',

            }}
        >
            <h1>This is an NBA database</h1>
=======
    const [players, setPlayers] = useState([]);

    async function onEnter(e){
        try{
            e.preventDefault();
            const response = await fetch('http://localhost:5000/total_players')
            const parseResponse = await reponse.json();

            setPlayers(parseResponse);
        }
        catch (error) {
            console.error(error.message)
        }
    }


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
>>>>>>> Stashed changes
        </div>
    );
};

export default Nbaplayer;
