import React, {useState, useEffect} from 'react';
const Nbachamp = () => {
    const [champs, setChamps] = useState([]);

    async function onEnter(){
        try{
            const response = await fetch('http://localhost:5000/total_championships')
            const parseResponse = await response.json();
            setChamps(parseResponse);
        }
        catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        onEnter();
      }, []);
    
    return (
    <div className='Champs'>
       <table className='tableChamps'>
            <thead>
                <th>Year</th>
                <th>Team</th>
                <th>Result (W = 1, L = 0)</th>
            </thead>
            <tbody>
                {champs.map(championship => (
                    <tr key={championship.champ_year}>
                        <td>{championship.champ_year}</td>
                        <td>{championship.champ_team_name}</td>
                        <td>{championship.team_result}</td>
                    </tr>
                ))
                }
            </tbody>
        </table> 
    </div>
    );
};

export default Nbachamp;
