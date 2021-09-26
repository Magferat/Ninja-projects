import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './Ninja.css';

// Info :
//This component contain the JavaScript code of Displaying loaded API section. 
// It was Called in 'Team' components Js File.
const Ninja = (props) => {

    const { img, name, rank, jutsu, speciallity, country, salary } = props.ninja;

    const { handleCoreTeam } = props;
    const select = <FontAwesomeIcon icon={faCheckCircle} />;



    return (
        <>
            <div className="card">
                <div className="img-style"><img src={img} alt="Avatar" />
                </div>

                <div className="container">
                    <h4>{name}</h4 >
                    <p><b>Rank :</b> {rank} </p>
                    <p className='skills'>

                        <b>Skills :</b><br />  {jutsu}. <br /></p>
                    <p> <b>Speciality : </b>{speciallity}.<br />

                        <b>Ninja Village : </b>{country}. <br />
                        <b>Salary : </b>${salary}k
                    </p>
                    <button onClick={() => handleCoreTeam(props.ninja)}>Add to A.S.F {select}</button>
                </div>
            </div>
        </>
    );
};

export default Ninja;