import React, {useState, useEffect} from 'react';
import {Button, Form} from 'reactstrap'

const Nbasalary = () => {
    const [minSalary, setMinSalary] = useState([]);
    const [maxSalary, setMaxSalary] = useState([]);
    const [salary, setSalary] = useState([]);


    async function onEnter(){
        try{
            const response = await fetch('http://localhost:5000/total_salaries')
            const parseResponse = await response.json();
            setSalary(parseResponse);
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
        <Form style = {{marginTop: 25 }}>
            <label>Minimum Salary</label>
            <input type="number" step="100000" id="salaryVal" onChange={e => setMinSalary}></input>
            <label>Max Salary</label>
            <input type="number" step="100000" id="salary1Val" onChange={e => setMaxSalary}></input>
            <button type="button" style= {{marginLeft:20}}>  
            Submit
            </button>
        </Form>
       <table className='tableSalary'>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Salary</th>
            </thead>
            <tbody>
                {salary.map(salary => (
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

