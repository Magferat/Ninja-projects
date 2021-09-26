import React from 'react';
import './CoreTeam.css';

// Info :
//This component contain the JavaScript code of 'Allied Shinobi  Forces' section. 
// It was Called in 'Team' components Js File

const CoreTeam = (props) => {

    const { coreTeam } = props;

    const totalReducer = (previouse, newValue) => previouse + newValue.salary;
    const total = coreTeam.reduce(totalReducer, 0)

    return (
        <div>
            <h3>Your Core Team</h3> <hr />
            <h2>  Allied Shinobi Forces <br />
                (A.S.F) </h2>
            <h4>Selected Ninjas : {props.coreTeam.length}</h4>
            <h3 style={{
                color: "maroon"
            }}>Total Expenses : $ {total}k</h3>

            <ul>
                {
                    props.coreTeam.map(person => <li
                    ><div className="list">
                            <img src={person.img} alt="" />
                            <p><b>{person.name}</b> <br />
                                ${person.salary}k</p></div></li>)
                }
            </ul>


        </div>
    );
};

export default CoreTeam;