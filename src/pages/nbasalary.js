import React, {useState, useEffect} from 'react';
const Nbasalary = () => {
    const [salaries, setSalaries] = useState([]);

    async function onEnter(){
        try{
            const response = await fetch('http://localhost:5000/total_salaries')
            const parseResponse = await response.json();
            setSalaries(parseResponse);
        }
        catch (error) {
            console.error(error.message)
        }
    }
    useEffect(() => {
        onEnter();
      }, []);
    
    return (
    <div className='salaries'>
       <table className='tableSalary'>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Salary</th>
            </thead>
            <tbody>
                {salaries.map(salary => (
                    <tr key={salary.player_ID}>
                        <td>{salary.player_id}</td>
                        <td>{salary.player_name}</td>
                        <td>{salary.player_salary}</td>
                    </tr>
                ))
                }
            </tbody>
        </table> 
    </div>
    );
};

export default Nbasalary;

