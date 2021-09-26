import React from 'react';
import './CoreTeam.css';

/* Info :
This component contain the JavaScript code of 'Allied Shinobi  Forces' section. 
It was Called in 'Team' components Js File*/

const CoreTeam = (props) => {

    const { coreTeam } = props;

    const totalReducer = (previouse, newValue) => previouse + newValue.salary;
    const total = coreTeam.reduce(totalReducer, 0)

    return (
        <div>
            <h3>Your Core Team <br />
                <i className="fas fa-users"></i>
            </h3>
            <h2>  Allied Shinobi Forces <br />
                (A.S.F) </h2>
            <h4>  Selected Ninjas : {props.coreTeam.length}</h4>
            <h3 style={{
                color: "maroon"
            }}>Total Expenses : $ {total}k</h3>

            <ul>
                {
                    props.coreTeam.map(ninjaa => <li
                    ><div className="list">
                            <i class="fas fa-check"></i>
                            <img src={ninjaa.img} alt="" />
                            <p><b>{ninjaa.name}</b> <br />
                                ${ninjaa.salary}k <br />
                            </p></div></li>)
                }
            </ul>


        </div>
    );
};

export default CoreTeam;


/*
 this JS file received an array as props from Team.js file
 then it run .map funtion on this, and present them as list item in UI */