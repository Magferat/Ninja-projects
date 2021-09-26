import React from 'react';

import './Ninja.css';

/* Info :
     This component contain the JavaScript code of Displaying loaded API section. 
     It was Called in 'Team' components Js File.*/

const Ninja = (props) => {

    const { img, name, rank, jutsu, speciallity, country, salary } = props.ninja;

    const { handleCoreTeam } = props;

    return (
        <>
            <div className="card">
                <div className="img-style"><img src={img} alt="Avatar" />
                </div>

                <div className="container">
                    <h4>{name}</h4>
                    <p><b>Rank :</b> {rank} <br />
                        <b>Skills :</b> {jutsu}. <br />
                        <b>Speciality : </b>{speciallity}.<br />

                        <b>Ninja Village: </b>{country} <br />
                        <b>Salary : </b>${salary}k
                    </p>
                    <button onClick={() => handleCoreTeam(props.ninja)}> <i class="fas fa-plus"></i> Select for A.S.F</button><br />

                </div>
            </div>
        </>
    );
};

export default Ninja;


/* About click-handle :

in Team.js i wrote e funtion for click-handling . i sent it as props through <Ninja> tag.
I called it here in button. whenever you clicked this button, this function would take all data about selected Ninja , add it an array.

then this array being passed through <coreTeam> as props. */