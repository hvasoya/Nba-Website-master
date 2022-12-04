import React, {Fragment} from 'react';


const Nbaplayer = () => {
        return (
        <Fragment> 
            <table class="table">
                <thead>
                <tr>
                    <th>Player Name</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>
                <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                </tr>
                <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                </tr>
                </tbody>
            </table> 
        </Fragment>
        // <div
        //     style={{
        //         display: 'flex',
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //         height: '100vh',

        //     }}
        // >
        //     <h1>This is an NBA database</h1>
        // </div>
    );
};

export default Nbaplayer;
