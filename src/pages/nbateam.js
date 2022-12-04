import React, {useState, useEffect, Fragment} from 'react';
const Nbateam = () => {
    const [teams, setTeams] = useState([]);
    const [minExperience, setMinExperience] = useState([]);


    async function onEnter(){
        try{
            const response = await fetch('http://localhost:5000/total_teams')
            const parseResponse = await response.json();
            console.log(parseResponse);
            setTeams(parseResponse);
        }
        catch (error) {
            console.error(error.message)
        }
    }
    async function getAllCoaches(){
        try{
            const response = await fetch('http://localhost:5000/total_teams')
            const parseResponse = await response.json();
            console.log(parseResponse);
            setTeams(parseResponse);
        }
        catch (error) {
            console.error(error.message)
        }
    }
    useEffect(() => {
        onEnter();
      }, []);
    
    return (
    <Fragment>
    <div className='teams'>
       <table className='tableTeams'>
            <thead>
                <th>Coach</th>
                <th>Team</th>
                <th>Coach Experience</th>
            </thead>
            <tbody>
                {teams.map(team => (
                    <tr key={team.team_name}>
                        <td>{team.coach_name}</td>
                        <td>{team.team_name}</td>
                        <td>{team.coach_experience}</td>
                    </tr>
                ))
                }
            </tbody>
        </table> 
    </div>
    </Fragment>
    );
};

export default Nbateam;

